var fs = require("fs");

var data = fs.readFileSync('./text.txt');
console.log(data.toString());
console.log('over');

fs.readFile('./text.txt', function (err, data) {
  if (err) return console.error(error);
  console.log(data.toString());
})
console.log('结束');