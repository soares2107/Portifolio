const particlesDark = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#0ef" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 }
    },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0ef",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 6, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
};

const particlesLight = {
  ...particlesDark,
  particles: {
    ...particlesDark.particles,
    color: { value: "#007b29" },
    line_linked: {
      ...particlesDark.particles.line_linked,
      color: "#007b29"
    }
  }
};

function loadParticles(config) {
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
  particlesJS("particles-js", config);
}

// Inicia no tema escuro por padrão
window.addEventListener("DOMContentLoaded", () => {
  loadParticles(particlesDark);
});

// Expondo para uso no script.js
window.loadParticles = loadParticles;
window.particlesDark = particlesDark;
window.particlesLight = particlesLight;
