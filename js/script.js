$('.question').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
});

$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$(function(){
    $(".plan-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        centerPadding: '100px',
        centerMode: true,
            responsive: [
                {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                centerMode: true,
                }
            }
        ]
    });
});

$(function(){
    new WOW().init();
});