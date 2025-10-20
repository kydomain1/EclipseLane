// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const submitText = document.getElementById('submitText');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        submitText.textContent = 'Sending...';
        contactForm.querySelector('.submit-btn').disabled = true;
        
        setTimeout(() => {
            // Show success message
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            formMessage.classList.remove('hidden', 'error');
            formMessage.classList.add('success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitText.textContent = 'Send Message';
            contactForm.querySelector('.submit-btn').disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }, 1500);
    });
}


