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

  // CREATING LIGHTBOX //

  /*
  $(".lightbox").delay(500).fadeIn(1000);
  */

  // CSS SELECTORS //

  /*
  $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("input:email").css("background-color", "rgba(180, 180, 30, 0.8)");
  */

  // JQUERY METHODS FOR TRAVERSAL //

  /*
  $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  */

  // JQUERY METHODS FOR FILTERING //

  /*
   $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
   $("li").filter(function(index) { 
      return index % 3 === 2;
    }).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");

  $("li").not(function (index) {
    return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");
  */

  // ADDING NEW ELEMENTS TO THE DOM //

  /*
  $("ul ul:first").append("<li>I am gonna be the last sub-item</li>");
  $("<li>I am gonna be the last item</li>").appendTo($("ul ul:first"));
  $("ul ul").prepend("<li>I am gonna be the first sub-item</li>");
  $("<h4>Mantas Masalis</h4>").prependTo("#content");
  $(".red-box").after("<div class='red-box'>Another red</div>");
  $(".blue-box").before("<div class='blue-box'>Blue Friend</div>");

  $(".blue-box").before(function() {
    return "<div class='blue-box'>Blue 2</div>";
  });

  $("p").after($("#list"));
  */

  


});