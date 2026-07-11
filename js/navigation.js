document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        const expanded = nav.classList.contains('open');
        toggle.setAttribute('aria-expanded', expanded);
    });
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('open'));
    });
});
