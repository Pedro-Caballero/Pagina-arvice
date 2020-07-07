const { Router } = require('express'); // me decuelve un objeto
const router = Router();
const nodemailer = require('nodemailer');

router.post('/email', async(req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    contentHTML = `

        <h1>Información</h1>
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Email: ${email} </li>
            <li>Telefono: ${telefono} </li>
        </ul>
        <p>${mensaje}</p>
    `;

    const transporte = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'cole.arvice@gmail.com',
            pass: 'arvice2020'
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    const info = await transporte.sendMail({
        from: "'Frmulario de ARVICE' <cole.arvice@gmail.com>",
        to: 'colegioarvice@hotmail.com',
        subject: 'Formulario de contacto',
        html: contentHTML
    });

    console.log('Mensaje enviado', info.messageId);
    // res.send("<script>alert('La venta se realizo correctam')</script>")
    res.redirect('/contacto');
});

module.exports = router;