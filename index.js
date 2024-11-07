const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.use('/receita_teste_1/assets', express.static(path.join(__dirname, 'public/receita_teste_1/assets')));
app.use('/simplesmente_amigurumi_40_37/assets', express.static(path.join(__dirname, 'public/simplesmente_amigurumi_40_37/assets')));
app.use('/receitas_recheios_sem_fogo/assets', express.static(path.join(__dirname, 'public/receitas_recheios_sem_fogo/assets')));
app.use('/720_receitas_zero/assets', express.static(path.join(__dirname, 'public/720_receitas_zero/assets')));

app.get('/receitas-para-bebes/pagamento', (req, res) => {
  res.redirect('https://go.hotmart.com/S96032525D?ap=a166');
});

app.get('/receitas-para-bebes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','receitas_para_bebes', 'src', 'index.html'));
});

app.use('/teste/assets', express.static(path.join(__dirname, 'public/teste/assets')));
app.get('/teste', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','teste', 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','testee', 'index.html'));
});

app.get('/receitas-que-nao-vao-fogo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','receitas_recheios_sem_fogo', 'src', 'index.html'));
});

app.get('/curso-simplesmente-amigurumis-4-0', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','receita_teste_1','src', 'index.html'));
});

app.get('/curso-simplesmente-amigurumis-4-0-37', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','simplesmente_amigurumi_40_37','src', 'index.html'));
});

// app.get('/100-receitas-funcionais', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public','100_receitas_funcionais','src', 'index.html'));
// });

app.get('/720-receitas-zero', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','720_receitas_zero','src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});