// ========================================
// Chatbot Widget Handler
// ========================================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotForm = document.getElementById('chatbotForm');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

// Generate session ID for this chat session
const sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

// Toggle chat window
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.toggle('open');
});

// Close chat window
chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.remove('open');
});

// Add message to chat
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
  messageDiv.textContent = text;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Handle chat form submission
chatbotForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = chatbotInput.value.trim();
  if (!message) return;

  // Add user message to chat
  addMessage(message, true);
  chatbotInput.value = '';

  // Show typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message bot';
  typingDiv.textContent = 'Typing...';
  chatbotMessages.appendChild(typingDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  try {
    const response = await fetch(CONFIG.chatbot.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Secret-Key': CONFIG.chatbot.secret
      },
      body: JSON.stringify({
        message: message,
        sessionId: sessionId
      })
    });

    const data = await response.json();

    // Remove typing indicator
    chatbotMessages.removeChild(typingDiv);

    // Add bot response
    if (data.reply) {
      addMessage(data.reply);
    } else {
      addMessage('Sorry, I couldn\'t process your message. Please try again.');
    }
  } catch (error) {
    // Remove typing indicator
    chatbotMessages.removeChild(typingDiv);
    addMessage('Connection error. Please check your internet and try again.');
  }
});
