const express = require('express');
const path = require('path');

const app = express();

// Servește fișiere statice din public
app.use(express.static(path.join(__dirname, 'public')));

// Rute
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/snake', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'snake.html'));
});

app.get('/test', (req, res) => {
  res.send('Acesta este un test!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
