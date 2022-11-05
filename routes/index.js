
const url=require('url')
const express=require('express')
const router =express.Router()

const needle=require('needle')
const { resourceLimits } = require('worker_threads')

const API_BASE_URL=process.env.API_BASE_URL
const  API_KEY_VALUE=process.env.API_KEY_VALUE
const  API_KEY_NAME=process.env.API_KEY_NAME


router.get('/',async(req,res)=>{
    try{
        console.log(url.parse(req.url,true).query)
       const params=new URLSearchParams({
        [API_KEY_NAME]:API_KEY_VALUE
       })
        const apiRes=await needle('get',`${API_KEY_VALUE}?${params}`)
        const data= apiRes.body
        res.status(200).json(data)
        
    }catch(error){
        res.status(500).json({error})

    }


})

module.exports=router
module.exports=url