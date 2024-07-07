$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active')
        $('#mobile-btn').find('i').toggleClass('fa-x')
    })
    const sections = $('section')
    const navItems = $('.nav-item')
    
    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
    
        let activeSectionIndex = 0;
    
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }
    
        sections.each(function(i) {
            const section = $(this) // referencia a propria sessao, e nao todas.
            const sectionTop = section.offset().top - 115   // quando essa sessao chega no top - o nav bar
            const sectionBottom = sectionTop + section.outerHeight()  // sectionTop + o tamanho da sessao
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {   // a scrollPosition tem que estar dentro da sessao (entre o top e bottom)
                activeSectionIndex = i; // se estiver, vai mostrar em qual sessao está.
                return false    // retorna falso para sair do loop
            }
        })
    
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active')
})

    ScrollReveal().reveal('.desktop-services', {
        origin: 'left',
        duration: 2000,
        distance: '120%',
        delay: 300,
        reset: true
    })

    ScrollReveal().reveal('.swiper', {
        origin: 'left',
        duration: 2000,
        distance: '120%',
        delay: 300,
        reset: true
    })

    ScrollReveal().reveal('.title-logo', {
        origin: 'top',
        duration: 2000,
        distance: '120%',
        delay: 300,
        reset: true
    })

    ScrollReveal().reveal('.subtitle-logo', {
        origin: 'bottom',
        duration: 2000,
        distance: '120%',
        delay: 300,
        reset: true
    })

    ScrollReveal().reveal('.description-logo', {
        origin: 'right',
        duration: 2000,
        distance: '120%',
        delay: 1000,
        reset: true
    })

    ScrollReveal().reveal('.title', {
        origin: 'top',
        duration: 2000,
        distance: '120%',
        delay: 100,
        reset: true
    })
})

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    speed: 600,
    loop: true,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex)
        }
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    }
})