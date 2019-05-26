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
        if (!document.body.classList.contains('executed')) {
          document.body.classList.add('executed');

          var $content = $('#content');
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

          var isFrontpage = document.body.classList.contains('homepage');
          $owlCarousel.owlCarousel({
            autoplay: true,
            autoplayTimeout: 15000,
            autoplayHoverPause: false,
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: isFrontpage ? ['V', 'V'] : ['⭠', '⭢']
          });

          $('.owl-prev').attr('title', isFrontpage ? 'vorheriges Video' : 'vorheriges Bild');
          $('.owl-next').attr('title', isFrontpage ? 'nächstes Video' : 'nächstes Bild');

          $('textarea').autogrow({vertical: true, horizontal: false});

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
            $content.append($contactForm);

            var $formItems = $contactForm.find('.form-item');
            $formItems.each(function() {
              var $this = $(this);
              var $input = $this.find('input').add($this.find('textarea'));
              var placeholder = $input.attr('placeholder');

              if (placeholder && placeholder.length) {
                $input.removeAttr('placeholder').
                    after('<div class="placeholder">' + placeholder + '</div>');
              }

              $input.on('change', function() {
                if (this.value && this.value.length) {
                  $(this).addClass('filled');
                } else {
                  $(this).removeClass('filled');
                }
              });
            });

            var $sendButton = $contactForm.find('input[type="submit"]');
            if ($sendButton.length) {
              $sendButton.eq(0).attr('value', 'Abschicken ⭢');
              $sendButton.eq(0).after(
                  '<p class="fineprint">Durch Angabe meiner E-Mail-Adresse und Anklicken des Buttons „Abschicken“ erkläre ich mich damit einverstanden, dass die Alpha Container Pictures GmbH mir Informationen zu meiner Angebotsanfrage per E-Mail zuschickt. Meine Einwilligung kann ich jederzeit gegenüber der Alpha Container GmbH widerrufen.</p>');
            }
          }

          var $detailsTabs = $('.details-tabs');
          if ($detailsTabs.length) {
            $detailsTabs.each(function() {
              var $detailTab = $(this);
              var $tabLinks = $detailTab.find('.tablinks div');
              var $tabcontents = $detailTab.find('.tabcontent');

              $tabLinks.each(function(index) {
                var $this = $(this);
                $this.on('click', function() {
                  if ($this.hasClass('active')) {
                    $tabLinks.removeClass('active');
                    $tabcontents.removeClass('active');
                  } else {
                    $tabLinks.removeClass('active').eq(index).addClass('active');
                    $tabcontents.removeClass('active').eq(index).addClass('active');
                  }
                });
              });

              var closeButton = $('<p class="close">Schließen</p>');
              closeButton.on('click', function() {
                $(this).parents('.details-tabs').find('.active').click();
              });
              $tabcontents.append(closeButton);
            });
          }

          var $fakeTags = $content.find('[data-tag]');
          if ($fakeTags.length) {
            $fakeTags.each(function() {
              var $this = $(this);
              var tag = $this.attr('data-tag');
              // var contents = $this.contents().length && $this.contents().html();
              // var newTag = $('<' + tag + '>' + contents + '</' + tag + '>');
              var newTag = $('<' + tag + '>');
              $.each(this.attributes, function(index, attribute) {
                newTag.attr(attribute.name, attribute.value);
              });

              $this.replaceWith(newTag);
            });
          }

        } // executed
      });// ready

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
