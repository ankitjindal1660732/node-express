const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended : false}));
app.use('/admin',adminRoute);
app.use(shopRoute);
// const Server = http.createServer((req, res) => {
// console.log(req.url, req.headers, req.method);
// //process.exit();
// const url = req.url;
// if(url === '/') {
//     res.write('<html><form action="/message" method="POST"><input name="message" type="string"><button Type="submit">Submit</button></form</html>');
//     return res.end();
// }
// if(url==="/message" && req.method ==="POST") {
//     fs.writeFileSync('message.js', 'dummy')
//     const body = [];
//     req.on('data', (chunk) => {
//         console.log(chunk)
//         body.push(chunk);
//     });
//     req.on('end', () => {
//         const bufferData = Buffer.concat(body).toString();
//         console.log(bufferData);
//     })
// }
// res.setHeader('content-type', 'html');
// res.write('<html><head><title>hello</title></head></html>');
// res.end();
  //const Server =http.createServer(app);
// })

app.listen(3000);