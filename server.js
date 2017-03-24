var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,'views')));

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
    res.json({"size (bytes)":req.file.size});
});

app.get('/', function(req, res){
   res.sendFile('index.html'); 
});

var port = process.env['PORT'] ||8080;

app.listen(port);