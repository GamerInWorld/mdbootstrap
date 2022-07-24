$(function() {
  var availableTags = ["Huawei","Smart watch","Apple airpods","Notebook",];  
  var NoResultsLabel = "No Results";
  $("#tags").autocomplete({
    source: function(request, response) {
      var results = $.ui.autocomplete.filter(availableTags, request.term);
      if (!results.length) {
        results = [NoResultsLabel];
      }
      response(results);
    },
    select: function (event, ui) {
      if (ui.item.label === NoResultsLabel) {
        event.preventDefault();
      }
    },
    focus: function (event, ui) {
      if (ui.item.label === NoResultsLabel) {
        event.preventDefault();
      }
    }
  });
});

$(function(){
  $(".cart_add").click(function(){
    $(".successfully-saved")
    .css("display", "block")
    .delay(3000).fadeOut(500);
  });
});

$(function(){
  $(".cart_rem").click(function(){
    $(".successfully-removed")
    .css("display", "block")
    .delay(3000).fadeOut(500);
  });
});

$( document ).ready(function() {
  new WOW().init()
});

$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

$(document).ready(function(){
  
  // OWL CAROUSEL - https://owlcarousel2.github.io/OwlCarousel2/
  $('#main-slider .owl-carousel').owlCarousel(
    {
      items: 1,
      margin: 0,
      loop: true,
      nav: false,
      navText: ['Back','Next'],
      dots: false,
      dotsEach: true,
      autoplay: true,
      autoplaySpeed: 500,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
    }
  );
  $('#owl-1 .owl-carousel').owlCarousel(
    {
      items: 4,
      margin: 16,
      loop: true,
      stagePadding: 64,
      nav: true,
      // navText: ['Back','Next'],
      navText: ['',''],
      // navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
      dots: false,
      dotsEach: true,
      lazyLoad: false,
      autoplay: true,
      autoplaySpeed: 500,
      navSpeed: 500,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    }
  );

});

