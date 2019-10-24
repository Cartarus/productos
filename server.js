var express = require('express');
var app = express();
const path = require('path');

var dbcon = require('../proyecto/DbConnection');
var connection = dbcon();
connection.connect();

var cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name :'duz6ox0te',
  api_key : '834367669389254',
  api_secret :'o2rVuprNlY9LVBHG-0pvbxJFCMo'
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/list', function (req, res) {
    res.json({text: 'Hola mundo :)'});
});

app.post('/loadImg', function (req, res) {
  console.log("entra");
  console.log(req.body);
  //res.json({text: 'Hola juank'});
  //connection.query('INSERT INTO publicaciones  VALUES (2,"correo2","url2","desc2",20,30) ;',(err, rows, fields)=> {
    // res.json(JSON.stringify(rows));
     
    // res.json(rows.lenth);
   
//     console.log(JSON.stringify(rows))

  // })

});


app.get('/search', function (req, res) {
  connection.query('SELECT *   from  publicaciones',(err, rows, fields)=> {
     
    console.log(JSON.stringify(rows))
  
  })

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});