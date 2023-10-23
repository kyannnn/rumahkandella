// Toggle Class Actove
const  navbarNav = document.querySelector
('.navbar-nav');

// Ketika Hamburger Menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');

};

// Klik diluar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector
('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!Hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');

    }
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetOffset = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});


