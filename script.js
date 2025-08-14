document.addEventListener('DOMContentLoaded', function() {
    // Thème switch
    const switchBtn = document.getElementById('theme-switch');
    const icon = switchBtn.querySelector('i');
    const body = document.body;
    // Appliquer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.classList.remove('ri-moon-line');
        icon.classList.add('ri-sun-line');
    }
    switchBtn.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        icon.classList.toggle('ri-moon-line', !isLight);
        icon.classList.toggle('ri-sun-line', isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    console.log('Portfolio chargé !');
});
