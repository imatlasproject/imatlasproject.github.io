// todo
// if (/Mobi|Android/i.test(navigator.userAgent)) {
//     // mobile!
    
// }


$(".releases").hide();
$(".about").hide();

$("#releases-button").click(function() {
  $(".home-content").animate({left: '-100%'});
  $(".releases").fadeIn();
  $("#home-video").css('filter', 'blur(3px)')
});


$("#releases-home-button").click(function() {
  $(".home-content").animate({left: '38.3906px'});
  $(".releases").fadeOut();
  $("#home-video").css('filter', 'blur(0px)')

});

// about section

$("#about-button").click(function() {
  $(".home-content").animate({left: '-100%'});
  $(".about").fadeIn();
  $("#home-video").css('filter', 'blur(3px)')
});


$("#about-home-button").click(function() {
  $(".home-content").animate({left: '38.3906px'});
  $(".about").fadeOut();
  $("#home-video").css('filter', 'blur(0px)')
});

