/* 
* @Author: hou
* @Date:   2017-05-15 14:17:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-16 17:12:47
*/
// var http = require('http');
// http.createServer(function (req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world\n');
// }).listen(8081,'127.0.0.1');
// console.log('Server is running at http://127.0.0.1:8081');
/*express*/
var express = require('express');
var app = express();
var port = 8082;
var ip = "127.0.0.1";
app.listen(port,ip);
app.get('/',function (req,res){
    res.send("this is default！\n");
});
app.get('/router1',function (req,res){
    res.send("this is router1\n");
});
app.get('/router2',function (req,res){
    res.send("this is router2\n");
});
app.get('/router3',function (req,res){
    res.send("this is router3\n");
});
console.log("start express server!");
