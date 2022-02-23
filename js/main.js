$(function () {

    $('.portfolio__filter-btn').on('click',function(){
        $('.portfolio__filter-btn').toggleClass('active');
    });
    $('.portfolio__btn').on('click',function(){
        $('.portfolio__btn').toggleClass('active');
    });
    $(".menu a, .go-top").on('click', function(event){
   event.preventDefault();
   var id = $(this).attr('href'),
   top = $(id).offset().top;
   $('body,html').animate({scrollTop:top},1500);
    });

   $('.burger-line').on('click', function(){
   $('.menu__list').toggleClass('menu__list--active');
   });
   $('.menu__btn').on('click', function(){
    $('.burger-line').toggleClass('burger-line--active');
    });
   
});



var mixer = mixitup ('.portfolio__content');