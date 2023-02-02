
// //!--------------------------------------kadin

// $(".drkadin").mouseenter(function(){
//     $(".header_menu_kadin").css("display","block")
//     $(".header_menu_kadin").slidedown("slow")
    
// });


// $(".drkadin").mouseleave(function () { 
//     $(".header_menu_kadin").css("display","none")
//     $(".header_menu_kadin").slideUp("slow") 

// });

// //!---------------------------------------erkek

// $(".drerkek").mouseenter(function(){
//     $(".header_menu_erkek").css("display","block")
//     $(".header_menu_erkek").slideDown("slow")
    

// });


// $(".drerkek").mouseleave(function () { 
//     $(".header_menu_erkek").css("display","none")
//     $(".header_menu_erkek").slideUp("slow") 

// });

// //!----------------------------------------cocuk

// $(".drcocuk").mouseenter(function(){
//     $(".header_menu_cocuk").css("display","block")
//     $(".header_menu_cocuk").slideDown("slow")
    

// });


// $(".drcocuk").mouseleave(function () { 
//     $(".header_menu_cocuk").css("display","none")
//     $(".header_menu_cocuk").slideUp("slow") 

// });


$('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
            nav:true,
            dots:false
        },
        600:{
            items:7,
            nav:false,
            dots:false
        },
        1000:{
            items:11,
            nav:true,
            loop:true,
            dots:false
        }
    }
});

$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            dots:false
        },
        500:{
            items:2,
            nav:true,
            loop:true,
            dots:false
        },
        800:{
            items:3,
            nav:true,
            loop:true,
            dots:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true,
            dots:false
        },
        1200:{
            items:5,
            nav:true,
            loop:true,
            dots:false
        },
        1300:{
            items:6,
            nav:true,
            loop:true,
            dots:false
        }
    }
});



$('.up_button').on('click',function () {
    $('html, body').animate({
        scrollTop:0
    },1)

})


// $(document).ready(function(){
//     $('slick').slick();
//   });
