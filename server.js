var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

console.log("listening...");
app.listen(process.env.PORT || 8080);