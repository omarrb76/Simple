const express = require("express"); // Importar express
const router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/') });
});

router.post('/email', (req, res) => {
    let { nombre, correo, contenido } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'simple.contactanos@gmail.com',
            pass: 'Contrasena123'
        }
    });

    let mailOptions = {
        from: 'simple.contactanos@gmail.com',
        to: 'omarshark23@gmail.com',
        subject: 'Contáctanos: ' + nombre,
        text: `Correo: ${correo}\nDuda: ${contenido}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send({message: 'Error mandando el correo'});
        } else {
            console.log('Email sent: ' + info.response);
            res.send({message: 'Correo mandado con exito'});
        }
    });
});

module.exports = router;