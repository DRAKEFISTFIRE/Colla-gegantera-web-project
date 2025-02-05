const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

app.post('/submit-portadors', (req, res) => {
  const { nom, edat, telefon, correu, pes, alçada, antic_alumne } = req.body;

  const mailOptions = {
    from: '',
    to: '',
    subject: 'Nou formulari de Portador',
    text: `
      Nom complet: ${nom}
      Edat: ${edat}
      Telèfon: ${telefon}
      Correu electrònic: ${correu}
      Pes: ${pes} kg
      Alçada: ${alçada} cm
      Antic alumne: ${antic_alumne === 'si' ? 'Sí' : 'No'}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error en l\'enviament del correu: ' + error);
    }
    res.status(200).send('Formulari enviat correctament!');
  });
});

app.post('/submit-musica', (req, res) => {
  const { nom, edat, instrument, nivell, telefon, correu, antic_alumne } = req.body;

  const mailOptions = {
    from: '',
    to: '',
    subject: 'Nou formulari de Músic',
    text: `
      Nom complet: ${nom}
      Edat: ${edat}
      Instrument: ${instrument}
      Nivell d'experiència: ${nivell}
      Telèfon: ${telefon}
      Correu electrònic: ${correu}
      Antic alumne: ${antic_alumne === 'si' ? 'Sí' : 'No'}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error en l\'enviament del correu: ' + error);
    }
    res.status(200).send('Formulari enviat correctament!');
  });
});

app.post('/submit-contacte', (req, res) => {
  const { nom, telefon, correu, missatge } = req.body;

  const mailOptions = {
    from: '',
    to: '',
    subject: 'Nou formulari de Contacte',
    text: `
      Nom complet: ${nom}
      Telèfon: ${telefon}
      Correu electrònic: ${correu}
      Missatge: ${missatge}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error en l\'enviament del correu: ' + error);
    }
    res.status(200).send('Formulari de contacte enviat correctament!');
  });
});

app.listen(port, () => {
  console.log(`Servidor en marxa a http://localhost:${port}`);
});
