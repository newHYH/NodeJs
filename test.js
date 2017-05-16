/* 
* @Author: hou
* @Date:   2017-05-15 14:17:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-15 14:29:55
*/
// var http = require('http');
// http.createServer(function (req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world\n');
// }).listen(8081,'127.0.0.1');
// console.log('Server is running at http://127.0.0.1:8081');
var http = require('http');
　　http.createServer(function (req, res) {
　　  res.writeHead(200, {'Content-Type': 'text/plain'});
 　　 res.end('Hello World\n');
　　}).listen(3000, "127.0.0.1");
　　console.log('Server running at http://127.0.0.1:3000/');