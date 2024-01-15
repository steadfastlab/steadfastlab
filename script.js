const navSlide = () => {
    const navButton = document.querySelector('.nav-menu-button');
    const navList = document.querySelector('.nav-listicons');
    const navLink = document.querySelectorAll('.nav-listicons li');
    navButton.addEventListener('click', () => {
        navList.classList.toggle('nav-listicons-active');
        navLink.forEach((link ,index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLink 0.5s ease forwards ${ index / 8 + 0.1}s`;
            }
        });
        navButton.classList.toggle('toggle');
    });

}
navSlide();