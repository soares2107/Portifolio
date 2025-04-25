const menu = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

menu.addEventListener('click', () => {
    menu.classList.toggle('change');
    navResponsive.style.display = navResponsive.style.display === 'block' ? 'none' : 'block';
});

const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function () {
    $html.classList.toggle('dark-mode');
    if ($html.classList.contains('dark-mode')) {
        loadParticles(particlesLight);
    } else {
        loadParticles(particlesDark);
    }
});

ScrollReveal({
    reset: true,
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

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("telefone").value;
            const mensagem = document.getElementById("mensagem").value;

            try {
                const resposta = await fetch("http://localhost:5000/api/contato", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nome, email, telefone, mensagem }),
                });

                const resultado = await resposta.json();
                alert(resultado.message);
            } catch (erro) {
                alert("Erro ao enviar a mensagem.");
                console.error(erro);
            }

            form.reset();
        });
    }
});
