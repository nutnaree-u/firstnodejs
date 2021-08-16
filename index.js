console.log('================')
console.log('Hi there, Im Nutnaree')
console.log('================')

var http = require('http');
var myModule = require('./myModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="color:Blue">Hello world!</h1>');
  res.write('<p>Text from Module : ' + myModule.myText +' </p>');
  res.end();
}).listen(8080);

console.log('sever runing on port 8080')