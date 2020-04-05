const pool = require('../bd');
// pool : referencia a la base de datos

"use strict"; // cabecera del lenguaje
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(objeto) {
    try {

        let transporter = nodemailer.createTransport({
            // simple mail transfer protocol, pop3
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'gonza.renteria14@gmail.com', // este va a ser el que envia el mail
            pass: 'gutenumu14' // generated ethereal password
          },
        //   transport security layer
          tls: {
              rejectUnauthorized : false
          }
        });
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', //este va a ser el nombre de quien lo manda
          to: 'darkgon39@gmail.com', // list of receivers
          subject: "CONSULTA DESDE LA PAGINA ✔", // Subject line
      
          html: "El usuario : "+objeto.nombre + " con correo : " +objeto.correo +" con el numero de telefono "+objeto.telefono +" mando el siguiente mensaje :<br> "+objeto.comentario // html body
        });
      
        return info.messageId;


    } catch(error) {
        console.log(error);
    }
}


module.exports = {main};