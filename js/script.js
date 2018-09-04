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

  /*
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
  */

  // CODING ACTIVITY: RETRIEVING POKEMON DATA FROM THEPOKEAPI //

  var pokeapi = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapi).done(function(data) {
    console.log(data);  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);
      var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
      var paragraph = $("<p>").html("Pokémon species no. " + (index+1) + " is ").append(link);

      link.click(function(event) {
        $.getJSON(pokemonByName + pokemon.name).done(function (details) {
          console.log(details);
          var pokemonDiv = $("#pokemon-details");
          pokemonDiv.empty();
          pokemonDiv.append("<h2>" + name + "</h2>");
          pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
        });
        event.preventDefault();
      });

      paragraph.appendTo("#pokedex");
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    console.log("Pokémon is awesome.")
  });

});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}