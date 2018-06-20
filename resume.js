(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


  jQuery(document).click(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },3000);
    });
  });

})(jQuery); // End of use strict

var nav = document.getElementById("sideNav");
var img = document.getElementById("quoteProfile");

// nav.addEventListener("mouseover", function(){
//   img.setAttribute("src","IMG/quote2.jpg");
// })
// nav.addEventListener("mouseout", function(){
//   img.setAttribute("src","IMG/quote1.jpg");
// })


function centerModal() {
  $(this).css('display', 'block');
  var $dialog = $(this).find(".modal-dialog");
  var offset = ($(window).height() - $dialog.height()) / 2;
  // Center modal vertically in window
  $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
  $('.modal:visible').each(centerModal);
});