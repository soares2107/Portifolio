const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contato", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem do portfólio de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    });

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao enviar mensagem", error: err });
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
