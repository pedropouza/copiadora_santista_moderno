$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active')
        $('#mobile-btn').find('i').toggleClass('fa-x')
    })

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
    
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }
    })

    function isStoreOpen() {
        const formatterHour = new Intl.DateTimeFormat("default", {
            timeZone: "America/Sao_Paulo",
            hour: "numeric",
            hour12: false
        });
        const currentTime = formatterHour.format(new Date())
    
        const open_closed = $('#open-closed')[0]
    
        if (new Date().getDay() == 0) { // Domingo
            $('#open-closed').toggleClass('store-closed')
            open_closed.textContent = "Fechado"
    
        } else if (new Date().getDay() == 6) {  // Sabado
            if (currentTime >= 9 && currentTime < 16) {
                $('#open-closed').toggleClass('store-open')
                open_closed.textContent = "Aberto"
            } else if (currentTime == 16 && currentTime < 17) {
                $('#open-closed').toggleClass('store-almost-closed')
                open_closed.textContent = "Fecha em breve"
            } else if (currentTime >= 17 || currentTime >= 0) {
                $('#open-closed').toggleClass('store-closed')
                open_closed.textContent = "Fechado"
            }
    
        } else {    // Dia da semana
            if (currentTime >= 9 && currentTime < 18) {
                $('#open-closed').toggleClass('store-open')
                open_closed.textContent = "Aberto"
            } else if (currentTime == 18 && currentTime < 19) {
                $('#open-closed').toggleClass('store-almost-closed')
                open_closed.textContent = "Fecha em breve"
            } else if (currentTime >= 19 || currentTime >= 0) {
                $('#open-closed').toggleClass('store-closed')
                open_closed.textContent = "Fechado"
            }
        }
    }
    isStoreOpen()
})