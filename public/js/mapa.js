$(document).ready(function() {
    $('.slider-carrusel').slick({
        // centerPadding: '6px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
        nextArrow: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5px',
                    slidesToShow: 2,
                    prev: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
                    next: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1,
                    prevArrow: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
                    nextArrow: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '2px',
                    slidesToShow: 2,
                    prevArrow: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
                    nextArrow: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
                }
            }
        ]
    });
});