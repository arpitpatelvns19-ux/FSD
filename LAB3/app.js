import http from "http";

const server =http.createServer((req,res)=>{
    res.end(" <h2> welcome to serverside</h2>");
});
server.listen(5000,()=>{
    console.log("server is running")
});