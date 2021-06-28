'use strict';

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var calculator = require('./app/calculator');

var a = 3;
var b = 5;

//console.log(`Suma ${a} + ${b} = ${calculator.add(a,b)}`);
//console.log(`Resta ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiplicacion ${a} + ${b} = ${calculator.multiply(a,b)}`);
//console.log(`Division ${a} + ${b} = ${calculator.divide(a,b)}`);