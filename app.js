// INTRO

// function sayHello(nama) {
//   console.log('Hello ' + nama);
// }

// sayHello('Dimas');

// console.log(window);


// Membuat web server:

// var http = require('http');

// function handleRequest(req, res) {
//   res.end('Hi, selamat menggunakan node.js');
// }

// var server = http.createServer(handleRequest);

// server.listen(8000, function() {
//   console.log('server running on http://localhost:8000');
// });


// var http = require('http');
// var fs   = require('fs');

// function handleRequest(req, res) {
//   res.writeHead(200, {'Content-Type': 'text-html'});

//   fs.readFile('./index.html', null, function(error, data) {
//     if(error) {
//       res.writeHead(404);
//       res.write('File Not Found!');
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// }

// var server = http.createServer(handleRequest);

// server.listen(5000, function() {
//   console.log('server running on http://localhost:5000');
// });

const tutorial = require('./tutorial');
console.log(tutorial);