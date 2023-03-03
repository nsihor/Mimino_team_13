$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    centerMode: false,
    // fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true, 
    dots: false,
    centerMode: false,
    focusOnSelect: false
  });