$(function () {

  // FADEOUT, FADEINT, FADETO, FADE TOOGLE //
 
  /*
  $(".red-box").fadeOut(1000);
  $(".green-box").fadeOut(1000);
  $(".blue-box").fadeOut(1000);
  $(".red-box").fadeIn(1000);
  $(".green-box").fadeIn(1000);
  $(".blue-box").fadeIn(1000);
  $(".red-box").fadeTo(3000, 0.2); //time, opacity
  $(".green-box").fadeTo(2000, 0.5);
  $(".blue-box").fadeTo(1000, 0.8);

  $(".blue-box").fadeToggle(); //memorizes opacity
  $(".blue-box").fadeToggle();
  */

  /*
  $(".green-box").fadeOut(1000);
  $(".green-box").fadeTo(1000, 0.5);
  */

  // SHOWING AND HIDING ELEMENTS //

  /*
  // $(".blue-box").hide();
  // $(".blue-box").show();
  $(".blue-box").hide(1000);
  $(".blue-box").show(1000);
  */

  // SLIDING ELEMENTS UP AND DOWN //

  /*
  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideDown(2000);
  $(".blue-box").slideToggle(2000);

  $("p").hide();
  $("p").slideDown(2000);
  */

  // MOVING ELEMENTS //

  /*
  $(".blue-box").animate({
    "margin-left": "+=200px"
  }, 1000, "swing"); //time
  */

  // CUSTOM ANIMATION //

  /*
  //can't use colors
  $(".blue-box").animate({
    marginLeft: "200px",
    opacity : "0",
    "height" : "50px",
    "width" : "50px",
    marginTop : "25px"
  }, 1000);

  $("p").animate({
    fontSize: "20px"
  }, 1000);
  */

  // DELAYING AND CHAINING //

  /*
  $(".red-box").fadeTo(1000, 0.2);
  $(".green-box").delay(1000).fadeTo(1000, 0.5);
  $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();
  */

  // TIMING ANIMATIONS USING CALLBACK FUNCTIONS //

  /*
  $(".red-box").fadeTo(1000, 0, function() {
    $(".green-box").fadeTo(1000, 0, function() {
      $(".blue-box").fadeTo(1000, 0);
    });
  });
  */

  
});