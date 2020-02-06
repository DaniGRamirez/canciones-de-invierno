const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
var bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let transporterToken = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'danigramirez27@gmail.com',
      clientId: '825503344034-ejv83of9mmmihot31f1b1r4b1r4gtnmb.apps.googleusercontent.com',
      clientSecret: '8wcnjarqosUvXBHVwDWI3pyP',
      refreshToken: '1/Lu1y1npb94hrR8EucLOXjxWYF4QZcAocrrgS_9HcEYuGzGB7gXgfhJU8EySl48i8',     
  }
});   

const transporterCancionesInvierno = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'info@cancionesdeinvierno.es',
    pass: 'cdiehc'
  }
});


app.get('/api/ping', function (req, res) {
  console.log("Api ping");
  return res.send("pong");
});

  app.post('/api/contacto/',function(req,res,next){
    console.log("Prueba canciones invierno");  
        var mailOptions = {
          sender: 'info@cancionesdeinvierno.es',
          from: `${req.body.mail}`,        
          to: 'info@cancionesdeinvierno.es', // list of receivers
          subject: `Formulario web - ${req.body.asunto}`, // Subject line       
          text: "Form Web",
          html: ` mensaje enviado desde: ${req.body.email} <br> Mensaje del usuario: ${req.body.mensaje}`, // plain text body       
          replyTo:`${req.body.correo}`,
        };            
  
        transporterCancionesInvierno.sendMail(mailOptions, function(error){
          if (error) {
            console.log(error);
            res.send(error);
          } else {
            console.log('Email sent');
            res.send("ok");
          }       
        });   
          console.log("Llamada a server correcta");
  });
    
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(port,()=> console.log(`App listening port ${port}`));
  //app.listen(port_post);
  
  