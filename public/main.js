let btn=document.getElementById("Mybtn")

let content=document.getElementById("content")

function getData(){
    url="https://secure.splitwise.com/api/v3.0/create_friends";
    fetch(url,{
        mode:'no-cors',
        method:'GET',
        headers:{
            Authorization:`BearerXYL65Zb9BpbnIJmZ3Wx2rOfWwMIeyA46ILTxJtuo`
        }
    }).then((data)=>{
        console.log(data);

    })
}
function postData(){
    url="https://dummy.restapiexample.com/api/v1/create" ;  
    data='{"name":"sheertty","salary":"123","age":"23"}'
    params={
            mathod:'post',
            headers:{
                'content-Type':'application/json'
            },
            body:data
    }
    fetch(url,params).then(response=>response.json()
    ).then(data=>{console.log(data);

    })
}
console.log("before get")
getData();
console.log("post data")
// postData();