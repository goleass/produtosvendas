const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.use('/receita_teste_1/assets', express.static(path.join(__dirname, 'public/receita_teste_1/assets')));
app.use('/receitas_recheios_sem_fogo/assets', express.static(path.join(__dirname, 'public/receitas_recheios_sem_fogo/assets')));

app.get('/receitas-para-bebes/pagamento', (req, res) => {
  res.redirect('https://go.hotmart.com/S96032525D?ap=a166');
});

app.get('/receitas-para-bebes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','receitas_para_bebes', 'src', 'index.html'));
});

app.get('/receitas-que-nao-vao-fogo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','receitas_recheios_sem_fogo', 'src', 'index.html'));
});

app.get('/curso-simplesmente-amigurumis-4-0', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','receita_teste_1','src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});