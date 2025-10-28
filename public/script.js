const btn = document.getElementById('fetchBtn');
const messageDiv = document.getElementById('message');
const switchSnakeBtn = document.getElementById('switchSnake');

// Buton pentru Snake
switchSnakeBtn.addEventListener('click', () => {
  window.location.href = '/snake'; // redirecționează către ruta serverului
});

// Buton pentru mesaj de salut
btn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://my-express-app-4mb3.onrender.com/salut'); // cerere către server
    const text = await response.text();
    messageDiv.textContent = text;
  } catch (err) {
    messageDiv.textContent = 'Eroare: Nu se poate contacta serverul';
  }
});
