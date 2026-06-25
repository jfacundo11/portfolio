// ========================================
// Contact Form Handler
// ========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate consent checkbox
    const consent = document.getElementById('consent');
    if (consent && !consent.checked) {
      formStatus.textContent = 'Please agree to the Privacy Policy before submitting.';
      formStatus.className = 'form-status error';
      return;
    }

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value
    };

    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(CONFIG.contactForm.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Secret-Key': CONFIG.contactForm.secret
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      formStatus.textContent = 'Something went wrong. Please try again later.';
      formStatus.className = 'form-status error';
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}
