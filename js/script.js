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

  // REPLACING ELEMENTS AND CONTENT //

  /*
  $("li").replaceWith("<li>Replaced</li>");
  $("li").replaceWith(function () { 
    return "<li>Replaced with function</li>";
  });

  let firstListItem = $("li:first");
  $("p").replaceWith(firstListItem);
  

  $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");

  $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");
  */

  // REMOVING ELEMENTS AND CONTENT //

  /*
  $("li").remove();
  $("form").children().not("input:text, textarea, br").remove();

  let detachedListItem = $("li").detach();
  $("#content").append(detachedListItem);

  $("p:first").empty();

  $(".red-box, .blue-box, .green-box").empty();
  */

  // MANIPULATING ATRIBUTES AND PROPERTIES //

  /*
  let spelcialLink = $("#special-link");

  console.log(spelcialLink.attr("href"));
  console.log(spelcialLink.attr("title"));

  spelcialLink.attr("href", "http://delfi.lt");

  let checkbox = $("input:checkbox");
  console.log(checkbox.prop("checked"));
  console.log(checkbox.attr("checked"));

  let textInput = $("input:text");
  textInput.val("Mantas Masalis")
  console.log(textInput.val());

  let rangeInput = $("input[type='range']");
  console.log(rangeInput.val());
  */

  // CREATING AN IMAGE SLIDER //
  /*
  let galleryImage = $(".gallery").find("img").first();

  let images = [
    "/images/laptop-mobile_small.jpg",
    "/images/laptop-on-table_small.jpg",
    "/images/people-office-group-team_small.jpg"
  ];

  let i = 0;

  setInterval(function() {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function(){
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr("src"));
  }, 2000);
  */

  // CHANGING CSS PROPERTIES OF ELEMENTS //

  /*
  $(".gallery").css("display", "none");

  var redBox = $(".red-box");
  console.log(redBox.css("width"));
  console.log(redBox.width());

  redBox.css("background-color", "#AA7700");
  $("p").css("font-size", "18px");
  redBox.css("width", "+=20px");

  var properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties);
  console.log(properties["font-size"]);

  // redBox.css("user-select", "none");

  redBox.css("user-select", function () { 
    return "none";
  });
 */

  // ADDING REMOVING CSS CLASSES //

  /*
  $("a").addClass("fancy-link");
  $("p:first").addClass("large emphasize");

  $("li li").addClass(function (index) { 
   $(this).addClass("item" + index);
  });

  $("div").addClass(function (index, currentClass) { 
   if(currentClass === "dummy") {
     return "red-box";
   }
  });

  $(".red-box").removeClass("red-box").addClass("blue-box");
    
  $(".dummy").removeClass("dummy").addClass("green-box");
  */

  // CHANGING THE DATA OF AN ELEMENT //

  /*
  let gallery = $(".gallery");
  let images = [
    "/images/laptop-mobile_small.jpg",
    "/images/laptop-on-table_small.jpg",
    "/images/people-office-group-team_small.jpg"
  ];

  gallery.data("availableImages", images);
  console.log(gallery.data("availableImages"));
  gallery.data("name", "The Awesome Gallery");
  console.log(gallery.data());
  gallery.removeData("name");
  console.log(gallery.data("name"));
  
  let firstPar = $("p:first");
  console.log(firstPar.data("mydata"));
  */

  // RETRIEVING AND CHANGING THE CONTENT OF AN ELEMENT //

  let firstPar = $("p:first");
  console.log(firstPar.text());
  console.log(firstPar.html());
  console.log($("p").html());

  // firstPar.text("<strong>Hello</strong> World!");
  // firstPar.html("<strong>Hello</strong> World!");

  firstPar.html(firstPar.html() + " this was just appended");



});