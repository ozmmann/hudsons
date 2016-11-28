$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoPlay: 3000,
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        navigation: true,
        navigationText: [
            "<i class='icon-chevron-left icon-white'></i>",
            "<i class='icon-chevron-right icon-white'></i>"
        ],
        singleItem: true,
        responsive: {
            0: {
                items: 1 // Two items from 480px up to 677px
            }
        }
    });
});