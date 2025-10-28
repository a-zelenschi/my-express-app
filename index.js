const express = require('express');
const path = require('path');

const app = express();

// Servește fișierul HTML la /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/snake',(req,res)=>{
    res.sendFile(path.join(__dirname,'snake.html'));
})

// Ruta care trimite mesajul de salut
app.get('/salut', (req, res) => {
  res.send('Salut! Bine ai venit pe serverul nostru Express!');
});

app.get('/test', (req, res) => {
    res.send('Acesta este un test!');
});




// Pornim serverul pe portul 3000
app.listen(3000, () => {
  console.log('Serverul rulează pe http://localhost:3000');
});
