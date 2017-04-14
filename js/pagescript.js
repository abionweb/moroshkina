/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    var bars = $('.menu-wrapper1 i.fa-bars');
    var close = $('.menu-wrapper1 .fa-times');
    var menuwrapper1 = $('.menu-wrapper1');

    bars.click(function() {
        console.log('123');
        menuwrapper1.removeClass('close');
    });
    close.click(function() {
        menuwrapper1.addClass('close');

    })
    console.log('ready');
});

$(document).ready(function(){
  $('.sli, .multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    //количество слайдов, которые выводятся на экране
    slidesToScroll: 1
    //количество слайдов, которые перелистываются за один раз
  });
  $('.single-item').slick({
      accessibility: false,
      arrows: false
  });
  $('.slider-menu div.td').eq(0).addClass('active');
  $('.slider-menu div.td').on('click', function() {
      var index = $(this).index();
      var slide = $(this).parent().parent().parent().find('.slider .slick-slide').eq(index);
      $('.single-item').slick('slickGoTo', index);
  });
  $('.single-item').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.slider-menu div.td').removeClass('active');
      $('.slider-menu div.td').eq(nextSlide).addClass('active');
  });
  $('.single-item').on('init', function(event, slick){
      console.log('123');
      console.log($(slick).slick('slickCurrentSlide'));
  });
});