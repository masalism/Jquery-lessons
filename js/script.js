$(function() {

  // FETCHING A SERVER FILE WITH JQUERY //
  /*
  $("#code").load("js/script.js");

  $("#code").load("js/script.js", function (response, status) {
    if(status === "error"){
      alert("could not find file");
    }
    console.log(response);
  });
  */

  // RETRIEVING FLICKR IMAGES TROUGHTHE FLICKR API //

  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl, {
    //options
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    //success
    console.log(data);
    $.each(data.items, function(index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if(index == 4) {
        return false;
      }
    });
  }).fail(function () {
    alert("AJAX call failed");
  });
   

});