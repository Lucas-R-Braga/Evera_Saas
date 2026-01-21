document.addEventListener('DOMContentLoaded', () => { 
    initContactForm();
    initSmoothScroll();
    initHeaderShadow();
    initRevealOnScroll();
});


/* ================ CONTACT ================ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (!form || !feedback) return;

    const button = form.querySelector('button[type="submit"]');

    function showFeedback(message, type = 'success') {
        feedback.textContent = message;
        feedback.className = ` text-sm text-center mt-2 transition-all duration-300 ${type === 'error' ? 'text-red-600' :
            'text-green-600'}`;
        
        feedback.classList.remove('hidden');
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (e) => { 
        e.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (!nome || !email || !mensagem) {
            showFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFeedback('Por favor, informe um email válido.', 'error');
            return;
        }

        button.disabled = true;
        button.textContent = 'Enviando...'

        setTimeout(() => {
            showFeedback('Obrigado por entrar em contato! Responderemos em breve', 'success');
            form.reset();
            button.disabled = false;
            button.textContent = 'Enviar mensagem';
        }, 1200)

    });
}

/* ================ SCROLL SUAVE ================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => { 
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}


/* ================ HEADER ================ */
function initHeaderShadow(){
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow-md', window.scrollY > 10); 
    });
}


/* ================ REVEAL ================ */
function initRevealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15});
    
    elements.forEach(el => observer.observe(el))
}
