var http = require("http");
var fs=require("fs");

console.log("Sanal Tur Serveri Başlatıldı. 3000 portunu deneyiniz.");
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'video/mp4'});
var rs=fs.createReadStream("a.mp4");
rs.pipe(res);
}).listen(3000);