$(document).ready(()=>{

    // *efecto menú
    $('.menu a').each(function(index,elemnto){
        $(this).css({
            'top': '-200px'
        })

        $(this).animate({
            top: '0'
        }, 1500 + (index * 500))
    })

    // * efecto HEADER
    if ( $(window).width() > 800 ) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        })
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        },2000)
    }

    // *--------- scroll elementos menú -----------
    var acercaDe = $('#acerca-de').offset().top;
    var menu = $('#platillos').offset().top;
    var galeria = $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: acercaDe
        },500)
    })
    $('#btn-menu').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: menu
        },500)
    })
    $('#btn-galeria').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: galeria + 20
        },500)
    })
    $('#btn-ubicacion').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: ubicacion + 60
        },500)
    })

})