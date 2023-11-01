/*!
 * Start Bootstrap - Createive v4.0.0-beta (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */


!function (a) {
    "use strict"; a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var e = a(this.hash); if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({ scrollTop: e.offset().top - 48 }, 1e3, "easeInOutExpo"), !1 } }), a(".js-scroll-trigger").click(function () { a(".navbar-collapse").collapse("hide") }), a("body").scrollspy({ target: "#mainNav", offset: 48 }), a(window).scroll(function () { a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink") }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", { duration: 600, scale: .3, distance: "0px" }, 200), sr.reveal(".sr-button", { duration: 1e3, delay: 200 }), sr.reveal(".sr-contact", { duration: 600, scale: .3, distance: "0px" }, 300), a(".popup-gallery").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' } })

    var pagePercentage = 0;

    // preloader
    $(window).on("load", function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({ 'overflow': 'visible' });
    });

    // menu2 - co oferujemy?
    if( $('.pm-services-tab-system-container').length > 0 ){
        
       
                      
        //Assign click events
        $('.pm_services_tab_icon_container').each(function(index, element) {
        
                var $this = $(this);
              
              $this.find('a').on('click', function(e) {
                  
                  e.preventDefault();
                  
                  //extract id number
                  var id = $(this).attr('id'),
                  idNum = id.substring(id.lastIndexOf('-') + 1);
                  
                  //Get target description
                  var targetDesc = $('#pm-services-tab-system-desc-' + idNum);
                  
                  //remove active class on descriptions
                  $('.pm-services-tab-system-desc').removeClass('active');
                  
                  //add active class on target description
                  
                  targetDesc.addClass('active');
                                          
                  //swap active class on parent container
                  $('.pm_services_tab_icon_container').removeClass('active');
                  $this.addClass('active');
                  
                  //Desktop interaction
                  if( $(window).width() > 767 ){
                                                                                                      
                      //recalculate arrow position
                      methods.animateServicesArrow( $('#pm-services-tab-system-container-arrow') );
                      
                  } else {
                    
                      //scroll down to services description
                      $('html, body').animate({
                        scrollTop: $("#pm-services-tab-system-scrollto").offset().top
                    }, 1500);
                      
                  }
                  
                  
                  
                          
              });
          
        });

        //arrow - co oferujemy
        $('.pm-services-tab-system-desc-expander').each(function (index, element) {

            var $this = $(this);

            var currDesc = $this.parents().find('.pm-services-tab-system-desc');

            if (currDesc.hasClass('active')) {

                $this.on('click', function (e) {

                    e.preventDefault();

                    var descContainer = $(this).parent().find('.pm-services-tab-system-desc-text'),
                        wrapper = $(this).parent().find('.pm-services-tab-system-desc-wrapper');

                    if (!$(this).hasClass('expanded')) {

                        $(this).addClass('expanded');
                        $(this).removeClass('fa fa-angle-down').addClass('fa fa-angle-up');

                        wrapper.css({
                            'height': descContainer.height()
                        });


                    } else {

                        $(this).removeClass('expanded');
                        $(this).removeClass('fa fa-angle-up').addClass('fa fa-angle-down');

                        wrapper.css({
                            'height': 240
                        });

                    }

                });

            }


        });

        //slider-top page
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'ease',
            fade: true,
            autoplay: true,
            autoplaySpeed: 8000,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false
        });

        // slider-efekty naszej pracy
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        if( $(window).width() > 767 ){
            
         //lightbox-gallery/efekty-naszej-racy
         $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });

        } else {

          //lightbox-gallery/efekty-naszej-racy
          $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });

            //lightbox-gallery
         $('#gallery').on('click', '[data-toggle="lightbox"]', function (event) {
            return false;
        });
        }
        
    
    }
}(jQuery);