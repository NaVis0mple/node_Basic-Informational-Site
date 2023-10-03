import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'


const basePath = fileURLToPath(import.meta.url) // /home/linux/repos/node_Basic-Informational-Site/index.js

const baseDir = path.dirname(basePath)  // /home/linux/repos/node_Basic-Informational-Site


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    let p = req.url
    console.log(p)
    switch (p) {
        case '/' :
            fs.readFile(path.join(baseDir,'public','index.html'),'utf-8',(err,data)=>{
                res.end(data)
            })
            break;
        case '/about':
            fs.readFile(path.join(baseDir,'public','about.html'),'utf-8',(err,data)=>{
                res.end(data)
            })
            break;
        case '/contact-me':
            fs.readFile(path.join(baseDir,'public','contact-me.html'),'utf-8',(err,data)=>{
                res.end(data)
            })
            break;    
        default:
            fs.readFile(path.join(baseDir,'public','404.html'),'utf-8',(err,data)=>{
                res.end(data)
            })
            break;
    }
})

server.listen(5000)
