const { Router } = require('express'); // me decuelve un objeto
const router = Router();
const nodemailer = require('nodemailer');

router.post('/email', async(req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    contentHTML = `

        <h1>Información</h1>
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Email: ${telefono} </li>
            <li>Telefono: ${email} </li>
        </ul>
        <p>${mensaje}</p>
    
    `;

    const transporte = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'pedro.caballero.ram@gmail.com',
            pass: '2015600258'
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    const info = await transporte.sendMail({
        from: "'Frmulario de ARVICE' <maureen9@ethereal.email>",
        to: 'colegioarvice@hotmail.com',
        subject: 'Formulario de contacto',
        html: contentHTML
    });

    console.log('Mensaje enviado', info.messageId);
    res.redirect('/contacto');
});

module.exports = router;