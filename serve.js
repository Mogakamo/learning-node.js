var url = require('url')
var adr = 'http://localhost:4040/default.htm?year=2020&month=July';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:4040'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?'

var qdata = q.query; //returns an object
console.log(qdata.month); //reads 'July'