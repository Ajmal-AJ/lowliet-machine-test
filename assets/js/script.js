//window scroll navbar fixed
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".navbar-scroll").addClass("fixed-top");
      $(".custom-navbar").addClass("fixed-custom-navbar");
    } else {
      $(".navbar-scroll").removeClass("fixed-top");
      $(".custom-navbar").removeClass("fixed-custom-navbar");
    }
  });

function openSearch() {
  document.getElementById("myOverlay").style.display ="block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display ="none";
}

new WOW().init();

$('.banner-slider-box .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:2000,
    navText : ["<img src='assets/icons/left-arow.svg' class='left-arrow-icon' alt=''>","<img src='assets/icons/right-arrow.svg' class='right-arrow-icon' alt=''/>"],
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

//counter section
var count = $('.counting');
count.counterUp({
  delay: 40,
  time: 3000
});


$('.testimonials-box .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    smartSpeed: 2000,
    loop:true,
    autoplay:true,
    navText : ["<img src='assets/icons/left-arow.svg' class='left-arrow-icon' alt=''>","<img src='assets/icons/right-arrow.svg' class='right-arrow-icon' alt=''/>"],
    
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
        }
    }
})