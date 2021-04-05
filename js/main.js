

$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
        //parallax header
        var wScroll = $(this).scrollTop();
        if(wScroll <= containerHeight) {
            $('.header__middle-1').css({
                'transform': 'translate(0%, '+ (wScroll/25) +'%)'
            });
            $('.header__middle-2').css({
                'transform': 'translate(0%, '+ (wScroll/3) +'%)'
            });
            $('.header__back').css({
                'transform': 'translate(0%, '+ wScroll/17 +'%)'
            });
            $('.header__fore').css({
                'transform': 'translate(0%, -'+ wScroll/70 +'%)'
            });
        }
       
    
        // sticky header 
        
        if(wScroll >= ($('.header__textbox').offset().top)){
            $('.nav').addClass('nav__sticky');
        } else {
            $('.nav').removeClass('nav__sticky');
        }



        //decoration animation-left
        // if(wScroll > $('.section-products').offset().top + $(window).height()/20 && wScroll < $('.section-products').offset().top) { 
        //     $('.decor-left').css({
        //         'transform': 'rotate('+(wScroll/20-29) +'deg)'
        //     });
        //     console.log("left");
        if(wScroll > $('.section-team').offset().top - $(window).height()/1.5 && wScroll < $('.section-experience').offset().top) { 
            $('.decor-left').css({
                'transform': 'rotate('+(wScroll/20-90) +'deg)'
            });
            console.log("left");
            console.log(wScroll/20-90);
        
        };

        //decoration animation-right
        // if(wScroll > $('.section-team').offset().top - $(window).height()/3 && wScroll < $('.footer').offset().top) {
        //     $('.decor-right').css({
        //         'transform': 'rotate('+(-wScroll/30+85) +'deg)'
        //     });
        // };

    });


    //menu modal
    $('.menu').click(function(){
        $('.nav__menu').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".nav__menu,.menu").length) {
          $("body").find(".nav__menu").removeClass("visible");
        //   console.log('click ouside')
        }
    });

});