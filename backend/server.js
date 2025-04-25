const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Verifica se o servidor de email está funcionando corretamente
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Erro na configuração do transporte:", error);
  } else {
    console.log("Servidor de email pronto!");
  }
});

// Rota de contato
app.post("/api/contato", async (req, res) => {
  console.log("Requisição recebida");
  const { nome, email, telefone, mensagem } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem do portfólio de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    });

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    res.status(500).json({ message: "Erro ao enviar mensagem", error: err });
  }
});

// Inicializa o servidor
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
