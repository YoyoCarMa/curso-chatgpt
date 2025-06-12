
const chatBox = document.getElementById('chatBox');
const guideBox = document.getElementById('guideBox');
const userInput = document.getElementById('userInput');

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

renderMessages();
