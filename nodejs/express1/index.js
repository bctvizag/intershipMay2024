const express = require('express')
const app = express();
const mf = require('./mathfun')

app.get('/', function(req, res ) {
    console.log(req.url);
    console.log(req.ip);
    res.send(`Hello Express
        <br>
        <a href="aboutpage">About Page</a>
        
        `)
})

app.get('/aboutpage', function(req, res ) {
    console.log(req.url)
    console.log("IP Address :",req.ip);
    res.send('this is about page')
})

let a = 11;
let b = 21;
console.log(mf.apptitle)
console.log(`${a} + ${b} =  ${mf.add(a,b)}`);
console.log(`${a} - ${b} =  ${mf.sub(a,b)}`);
console.log(`${a} - ${b} =  ${mf.prod(a,b)}`);

app.listen(3000, function(){
    console.log(`Express App Running at http://localhost:3000`)
})