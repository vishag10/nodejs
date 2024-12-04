const http= require("http")
const fs=require("fs");
const url=require("url");
http.createServer((req,res)=>{
    const parsed =url.parse(req.url);
    fs.readFile("./pages"+parsed.pathname,(error, data)=>{
        if(error){
            fs.readFile("./pages/error.html","utf-8",(error, data)=>{
                res.writeHead(404,{"content-type":"text/html"});
                res.write(data);
                res.end();
            })
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    })
}).listen(3001,()=>{
    console.log("server created successfully");
    
})