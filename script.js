var menuIcon = document.getElementById('menu-icon')
var menuList = document.getElementById('menu-list')
var menuIconX = document.getElementById('menu-iconX')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle ('hidden');
    menuIconX.classList.toggle ('hidden');
    menuList.classList.toggle ('hidden');
});

menuIconX.addEventListener('click', () => {
    menuIcon.classList.toggle ('hidden');
    menuList.classList.toggle ('hidden');
    menuIconX.classList.toggle ('hidden');
});