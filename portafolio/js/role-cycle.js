// Rotación de palabras en el hero: "Desarrollador / Diseñador / Creador 3D"
const roles = ['Desarrollador', 'Diseñador', 'Creador 3D'];
let roleIndex = 0;
const roleEl = document.getElementById('role-word');

function cycleRole() {
  roleEl.style.opacity = '0';
  roleEl.style.transform = 'translateY(4px)';
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
    roleEl.style.opacity = '1';
    roleEl.style.transform = 'translateY(0)';
  }, 250);
}

roleEl.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
setInterval(cycleRole, 2400);
