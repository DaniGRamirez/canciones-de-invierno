const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  app.listen(port,()=> console.log(`App listening port ${port}`));
  //app.listen(port_post);
  
  