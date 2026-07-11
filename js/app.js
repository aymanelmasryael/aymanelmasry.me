document.addEventListener('DOMContentLoaded', () => {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === current || (current === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
});
