// Toggle Navigation Menu on Mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close Navbar on link click & Highlight Active Section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close menu when scrolling
    navbar.classList.remove('active');
};

// Form Validation and Submission Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation Rules
    if (!name || !email || !subject || !message) {
        formStatus.style.color = '#ff4d4d';
        formStatus.textContent = 'Please fill out all fields.';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formStatus.style.color = '#ff4d4d';
        formStatus.textContent = 'Please enter a valid email address.';
        return;
    }

    // Success Simulation
    formStatus.style.color = '#238636';
    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
    
    // Clear form fields
    contactForm.reset();

    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
});