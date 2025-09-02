const buttons = document.querySelectorAll('.language-switcher button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;

        document.querySelectorAll('.story .lang').forEach(p => {
            p.style.display = p.classList.contains(lang) ? 'block' : 'none';
        });

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
