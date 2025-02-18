// Typing Animation
const roles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "MERN Stack Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let deletingDelay = 50;
let newTextDelay = 2000;

function typeText() {
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById('typing-text');

    if (isDeleting) {
        charIndex--;
        typingDelay = deletingDelay;
    } else {
        charIndex++;
        typingDelay = 100;
    }

    typingElement.textContent = currentRole.substring(0, charIndex);

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeText, typingDelay);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .education-item');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});