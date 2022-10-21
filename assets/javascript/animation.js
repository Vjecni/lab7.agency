$('.hamburger').on('click', () => {
    $('.hamburger').toggleClass('active')

    $('.modal-menu').toggleClass('active')

    if($('.hamburger').hasClass('active')) {
        setTimeout(() => {
            $('.hamburger').toggleClass('transform')
        }, 500)
    }


    if($('.hamburger').hasClass('transform')) {
        setTimeout(() => {
            $('.hamburger').toggleClass('transform')
        }, 0)
    }
})

$('.close-nav').on('click', () => {

    $('.modal-menu').removeClass('active')
    
    $('.hamburger').removeClass('active')
    $('.hamburger').removeClass('transform')

})
