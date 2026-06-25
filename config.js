// WARNING: Do NOT commit real secrets to this file.
// After adding real values, make sure this file is in .gitignore
// or use environment variables in your n8n workflows instead.

const CONFIG = {
  contactForm: {
    url: 'YOUR_N8N_URL/webhook/contact',
    secret: 'YOUR_SECRET_KEY'
  },
  chatbot: {
    url: 'YOUR_N8N_URL/webhook/chatbot',
    secret: 'YOUR_SECRET_KEY'
  }
};
