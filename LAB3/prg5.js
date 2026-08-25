import http from "http"

const server = http.createServer((req,res)=>{
    res.writeHead(200,{ "content-type":"application/json"});
    const product ={
        name:"mobile",
        prize:25000,
        discount:"10%",
        company:"samsung",
    };
    res.end(JSON.stringify
        (product));
});
server.listen(3000,()=>
    console.log("server is running..."));
