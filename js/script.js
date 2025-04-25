const menu = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

menu.addEventListener('click', () => {
    menu.classList.toggle('change');
    navResponsive.style.display = navResponsive.style.display === 'block' ? 'none' : 'block';
});

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function () {
    $html.classList.toggle('dark-mode');
    if ($html.classList.contains('dark-mode')) {
        loadParticles(particlesLight);
    } else {
        loadParticles(particlesDark);
    }
});

ScrollReveal({
    reset: true, // repete a animação ao rolar novamente
    distance: '60px',
    duration: 1000,
    delay: 200
  });
  
  ScrollReveal().reveal('.home-content, .about-content, .services-box, .portifolio-box, form', {
    origin: 'bottom',
    interval: 200
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const data = {
          nome: form.querySelector('input[placeholder="Full Name"]').value,
          email: form.querySelector('input[placeholder="E-mail"]').value,
          telefone: form.querySelector('input[placeholder="Phone Number"]').value,
          assunto: form.querySelector('input[placeholder="Subject"]').value,
          mensagem: form.querySelector('textarea').value
        };
  
        try {
          const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          const json = await res.json();
          alert(json.message);
          form.reset();
        } catch (err) {
          alert('Erro ao enviar mensagem.');
          console.error(err);
        }
      });
    }
  });
  