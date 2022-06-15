"use strict";

const slider = tns({
    container: '.reviews-carousel',
    loop: true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        },
        1200: {
	        items:4
        },

    },
    slideBy: 'page',
    nav: true,    
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    gutter: 20,
    navPosition: 'bottom',
    controls: false,
    speed: 800,
    edgePadding: 40,

});








