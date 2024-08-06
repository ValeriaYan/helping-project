
$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: document.querySelector('.prev'),
  nextArrow: document.querySelector('.next'),
  speed: 600,
  responsive: [
    {
        breakpoint: 560,
        settings: {
          prevArrow: document.querySelector('.mobile-prev'),
          nextArrow: document.querySelector('.mobile-next'),
        }
    },
  ]
})
