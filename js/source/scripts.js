/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.alphacontainer = {
    attach: function(context, settings) {
      // var $document = $(document);
      // var $body = $(document.body);

      $(document).ready(function() {
        // Execute code once the DOM is ready.
        var $owlCarousel = $('.owl-carousel');
        var $videos = $owlCarousel.find('video');

        $videos.each(function() {
          var $this = $(this);
          var $container = $this.parent();
          var fallbackUrl = $container.find('span').text().trim();
          $container.css({
            'background-image': 'url("' + fallbackUrl + '")'
          });
        });

        if ($(window).width() > 992) {
          $videos.attr({'autoplay': true, 'preload': 'auto'});
          $videos.each(function() {
            var waitTime = 150;
            var _this = this;

            setTimeout(function() {
              // Resume play if the element is paused.
              if (_this.paused) {
                _this.play();
              }
            }, waitTime);
          });
        }

        if (!$('#burger').length) {
          var header = $('#header');
          var navi = $('#navigation');
          var burger = $(
              '<svg xmlns="http://www.w3.org/2000/svg" id="burger" class="hidden-lg" viewBox="0 0 27 16"><style>.st0{fill:none;stroke:#cd3333;}</style><path d="M0 .5h27m-27 5h27m-27 5h27m-27 5h27" class="st0"/></svg>');
          burger.on('click', function() {
            navi.toggleClass('open');
          });

          header.prepend(burger);
        }

        /* owl.on('initialized.owl.carousel resized.owl.carousel changed.owl.carousel', function (event) {
         if ($(window).width() > 992) {
         owl.find('video').attr({'autoplay': true, 'preload': 'auto'});
         }
         });*/

        $owlCarousel.owlCarousel({
          autoplay: true,
          autoplayTimeout: 15000,
          autoplayHoverPause: false,
          items: 1,
          loop: true,
          margin: 0,
          nav: true,
          navText: ['V', 'V']
        });

        $('.owl-prev').attr('title', 'vorheriges Video');
        $('.owl-next').attr('title', 'nächstes Video');

        var $overviewPage = $('.overview-page');
        if ($overviewPage.length) {
          var $items = $overviewPage.find('.item');

          $items.each(function() {
            var $that = $(this),
                link = $that.find('a').attr('href');

            $that.on('click', function() {
              if ($(window).width() < 1025) {
                if ($that.hasClass('active')) {
                  window.location.href = link;
                } else {
                  $items.removeClass('active');
                  $that.addClass('active');
                }
              } else {
                window.location.href = link;
              }
            });
          });
          $overviewPage.append('<div class="item"/><div class="item"/><div class="item"/>');
        }

        var $newsItems = $('.news').find('div');
        if ($newsItems.length) {
          $newsItems.each(function() {
            var $this = $(this);
            $this.dotdotdot({
              after: 'span.readmore',
              watch: 'window',
              callback: function() {
                $this.addClass('done');
              }
            });
          });
        }

        var $contactForm = $('.contact-message-form');
        if ($contactForm.length) {
          $('#content').append($contactForm);
        }

        var $detailsTabs = $('.details-tabs');
        if ($detailsTabs.length) {
          $detailsTabs.each(function(){
            var $detailTab = $(this);
            var $tabLinks = $detailTab.find('.tablinks span');
            $tabLinks.each(function(index) {
              $(this).on('click', function() {
                $detailTab.find('.tabcontent').removeClass('active').eq(index).addClass('active');
              });
            });
          });
        }
      });

      $(window).on('load', function() {
        // Execute code once the window is fully loaded.
      });

      $(window).on('resize', function() {
        // Execute code when the window is resized.

        if ($(window).width() > 992) {
          var videos = $('.owl-carousel').find('video');
          videos.attr({'autoplay': true, 'preload': 'auto'});
          videos.each(function() {
            var waitTime = 150;
            var _this = this;
            setTimeout(function() {
              // Resume play if the element is paused.
              if (_this.paused) {
                _this.play();
              }
            }, waitTime);
          });
        }

        if (!$('#burger').length) {
          var header = $('#header');
          var navi = $('#navigation');
          var burger = $(
              '<svg xmlns="http://www.w3.org/2000/svg" id="burger" class="hidden-lg" viewBox="0 0 27 16"><style>.st0{fill:none;stroke:#cd3333;}</style><path d="M0 .5h27m-27 5h27m-27 5h27m-27 5h27" class="st0"/></svg>');
          burger.on('click', function() {
            navi.toggleClass('open');
          });

          header.prepend(burger);
        }
      });

      //$(window).scroll(function() {
      // Execute code when the window scrolls.
      //});
    }
  };

}(jQuery, Drupal, this, this.document));
