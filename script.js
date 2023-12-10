var menuIcon = document.getElementById('menu-icon')
var menuList = document.getElementById('menu-list')

menuIcon.addEventListener('click', () => {
    menuIcon.style.transition = 'all';
    menuIcon.style.transitionDuration = '2s';
    menuIcon.style.transitionDelay = '1.2s';
    menuList.classList.toggle ('hidden');
});