
const chatBox = document.getElementById('chatBox');
const guideBox = document.getElementById('guideBox');
const userInput = document.getElementById('userInput');
const guiaBox = document.getElementById('guias');
const ejemploBox = document.getElementById('ejemplos');

const messages = JSON.parse(localStorage.getItem('chat-messages')) || [];
const guides = JSON.parse(localStorage.getItem('guide-messages')) || [];

function renderMessages() {
  chatBox.innerHTML = messages.map(m => `<p>🧔‍♂️ Tú: ${m}</p>`).join('');
  guideBox.innerHTML = guides.map(g => `<p>💬 Jordi: ${g}</p>`).join('');
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text !== '') {
    messages.push(text);
    userInput.value = '';
    localStorage.setItem('chat-messages', JSON.stringify(messages));
    renderMessages();
    setTimeout(() => addGuide('Gracias por tu mensaje. ¿Te puedo ayudar con algo más?'), 1000);
  }
}

function addGuide(text) {
  guides.push(text);
  localStorage.setItem('guide-messages', JSON.stringify(guides));
  renderMessages();
}

function mostrarGuia() {
  guiaBox.classList.toggle('visible');
  guiaBox.classList.toggle('oculto');
  guiaBox.innerHTML = `
    <h4>¿Cómo usar ChatGPT?</h4>
    <ul>
      <li>Haz clic en el enlace azul para abrir ChatGPT.</li>
      <li>Escribe lo que quieras saber como si hablaras con alguien.</li>
      <li>Ejemplo: <em>¿Qué significa SAT?</em></li>
      <li>No tengas miedo, puedes equivocarte y volver a preguntar.</li>
    </ul>
  `;
}

function mostrarEjemplos() {
  ejemploBox.classList.toggle('visible');
  ejemploBox.classList.toggle('oculto');
  ejemploBox.innerHTML = `
    <h4>Ejemplos útiles</h4>
    <ul>
      <li>¿Cómo hacer arroz blanco?</li>
      <li>Explícame qué es una VPN</li>
      <li>Dame un consejo para ahorrar dinero</li>
      <li>¿Qué trámites puedo hacer en línea en México?</li>
    </ul>
  `;
}

function reiniciar() {
  if (confirm('¿Seguro que quieres borrar todo y empezar de nuevo?')) {
    localStorage.clear();
    location.reload();
  }
}

renderMessages();
