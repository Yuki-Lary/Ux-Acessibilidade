const contrastToggle = document.getElementById('contrast-toggle');
const body = document.body;
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function updateContrastMode(enabled) {
    body.classList.toggle('high-contrast', enabled);
    contrastToggle.setAttribute('aria-pressed', String(enabled));
    contrastToggle.textContent = enabled ? 'Desativar alto contraste' : 'Ativar alto contraste';
    localStorage.setItem('ux-acessibilidade-contrast', enabled ? 'true' : 'false');
}

contrastToggle.addEventListener('click', () => {
    const enabled = !body.classList.contains('high-contrast');
    updateContrastMode(enabled);
});

window.addEventListener('DOMContentLoaded', () => {
    const stored = localStorage.getItem('ux-acessibilidade-contrast');
    updateContrastMode(stored === 'true');
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) {
        formStatus.textContent = 'Verifique os campos destacados e tente novamente.';
        formStatus.style.color = '#dc2626';
        return;
    }

    formStatus.textContent = 'Obrigado! Recebemos sua mensagem com sucesso.';
    formStatus.style.color = '#16a34a';
    form.reset();
});
