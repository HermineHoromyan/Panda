function myFunction() {
    let light = localStorage.getItem("pandaTechDarkMode")
    let element = document.body;

    if (element) {
        if (!light) {
            element.classList.add("G-dark-mode");
            localStorage.setItem("pandaTechDarkMode", 'isDark')
        } else {
            element.classList.remove("G-dark-mode")
            localStorage.removeItem("pandaTechDarkMode")
        }
    }
}

function getDarkMode() {
    let light = localStorage.getItem("pandaTechDarkMode")
    let element = document.body;
    let checkbox = document.getElementById('switch')
    if (element) {
        if (light) {
            element.classList.add("G-dark-mode");
            localStorage.setItem("pandaTechDarkMode", 'isDark')
            checkbox.checked = true
        } else {
            element.classList.remove("G-dark-mode")
            localStorage.removeItem("pandaTechDarkMode")
        }
    }

}

getDarkMode()

//  ================ -scroll-contacts-start- ================

$(document).ready(function () {
    $('#scrolling-menu li a').click(function () {
        let target = $(this).attr('id');
        scrollingSections('#' + target)
    })
});
//  ================ -scroll-contacts-end- ================

//  ================ -menu-click-start- ================
let time = 0;

$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 991) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            if (window.innerWidth < 500) {
                $('.menu-cnt').css({width: '50%', transition: '0.5s'});
            } else {
                $('.menu-cnt').css({width: '40%', transition: '0.5s'});
            }
            $('body').addClass('body_fix');
            let menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            let menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.3s'})
                }
            })
        }
    });

    $('.for-mobile-bg').on('click', closeMenu)

});

function closeMenu() {
    const burgerButton = $('.open-menu')
    if (burgerButton.hasClass('close-menu')) {
        burgerButton.removeClass('close-menu')
    }
    $('.menu-cnt').css({width: '0%'});
    $('body').removeClass('body_fix');
    time = 0;
    let menu_li = $(".sidenav ul li");
    console.log(menu_li)
    $(menu_li).each(function () {
        if ($(this).hasClass('anim-menu')) {
            $(this).removeClass('anim-menu');
            $(this).css({'opacity': '0', transition: '0.3s'})
        }
    })
}


const menuItems = document.querySelectorAll('.P-header-nav-block-menu-item a')
if (window.innerWidth < 767) {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', closeMenu)
    }
}


console.log(window.location)

if (window.location.hash) {
    scrollingSections(window.location.hash)
}


function scrollingSections(hashTag) {
    if (hashTag) {
        let content = $(hashTag + '-content')
        window.location.hash = hashTag
        let x = window.innerWidth<767?60:100
        $('html, body').animate({scrollTop: content.offset().top - x}, 1000);

        $('#scrolling-menu a').each(function () {
            $(this).removeClass('P-active-header')
        })
        $(hashTag).addClass('P-active-header')
    }
}

//  ================ -menu-click-end- ================