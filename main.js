//Header
var mobileMenu = document.querySelector('.navbar-mobile-wrapper');
var mobileMenu_openBtn = document.querySelector('.mobile-menu__trigger');
var mobileMenu_closeBtn = document.querySelector('.mobile-menu__close');
var header = document.querySelector('header')

//Header's event
document.onscroll = function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop !== 0) {
        header.classList.add('onScrolled');
    } else {
        header.classList.remove('onScrolled');

    }

}

//Mobile's & tablet's header
mobileMenu_openBtn.onclick = function () {
    mobileMenu_openBtn.classList.toggle('display-none')
    document.querySelector('.logo a').classList.toggle('display-none')
    mobileMenu_closeBtn.classList.toggle('display-none')

    //Header's position changes
    header.classList.toggle('headerMoveRight')

    //Mobile's position menu appears
    Object.assign(mobileMenu.style, {
        transform: 'translateX(0)',
        transition: 'all 0.5s'
    });
}

mobileMenu_closeBtn.onclick = function () {
    mobileMenu_openBtn.classList.toggle('display-none')
    document.querySelector('.logo a').classList.toggle('display-none')
    mobileMenu_closeBtn.classList.toggle('display-none')

    //Header's position changes
    header.classList.toggle('headerMoveRight')


    //Mobile's position menu appears
    Object.assign(mobileMenu.style, {
        transform: 'translateX(calc(-100% - 10px))',
        transition: 'all 0.5s'
    });

}


//----------------------------------------------------------------
