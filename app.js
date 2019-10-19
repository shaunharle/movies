conLog = input => {
  console.log(input);
};

$(() => {
  $("form").on("submit", () => {
    event.preventDefault();
    const $inputBox = $("#input-box");
    const $inputValue = $inputBox.val();
    const $fixedInput = $inputValue.replace(/ /g, "+");
    searchLink =
      `https://api.themoviedb.org/3/search/movie?api_key=242360b40786effa62d7b362929924c5&query=` +
      $fixedInput;
    $(event.currentTarget).trigger("reset");
    let movies = [];
    $.ajax({
      url: searchLink
    }).then(grabID => {
      inputID = grabID.results[0].id;
      conLog("input id: " + inputID);
      //IF I PUT THE FORM SUBMIT HERE IT SHOULD HANDLE IT WELL, BUT THE AJAX FUNCTION NEEDS SOME WORK AND I NEED TO DECLARE VARIABLES IN THE RIGHT PLACES TO MAKE IT FUNCTION PROPERLY
      const $queryLink = `https://api.themoviedb.org/3/movie/${inputID}/similar?api_key=242360b40786effa62d7b362929924c5&language=en-US&page=1`;
      conLog($queryLink);
      //   const actionMovies =
      //     "https://api.themoviedb.org/3/discover/movie?api_key=242360b40786effa62d7b362929924c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en";
      // LET INPUT ID??????????

      let count = 0;
      /////////////////////////
      //COMMENTING OUT THE AJAX FUNCTION. NECESSARY. ADD IT BACK IN TO HANDLE THE DATA
      /////////////////////////
      $.ajax({
        url: $queryLink
      }).then(findSimilar => {
        /////////////////////////////////////////////////////////////
        //TOOK THE FORM SUBMIT FUNCTION. THEN THOUGHT BETTER WHOOPS
        // THIS DOES NEED TO BE MOVED UP THOUGH. IF THE INPUT BOX IS HANDLED AT THE TOP LEVEL, THEN THE ID CAN BE INSERTED IN THE QUERY LINK AND THEN ALL WILL BE WELL

        //TOOK THE AJAX FUNCTION. THEN THOUGHT BETTER WHOOPS
        /////////////////////////////////////////////
        /////////////////////////////////////////////
        // USE ANOTHER AJAX FUNCTION HERE TO POPULATE MOVIES ARRAY AND THEN YOU'RE CLOSE. HOME STRETCH, IT SEEMS.
        /////////////////////////////////////////////
        /////////////////////////////////////////////

        //   conLog($inputValue);
        // conLog("event" + event);
        ////////////////////////////////////////////////
        // BEGIN LOOP BLOCK
        ////////////////////////////////////////////////
        // for (i = 0; i < 10; i++) {
        //   count = i;

        //   movieTitles = movies[i].title;
        //   movieOverview = movies[i].overview;
        //   movieID = movies[i].id;
        //   posterLink = "http://image.tmdb.org/t/p/w1280";
        //   posterPath = movies[i].poster_path;

        //   let $movieName = $("<p>").text(movieTitles);
        //   $("body").append($movieName);
        //   // conLog(movieOverview);
        //   // conLog(movieID);
        //   let $posterImage = $("<img class='posters' id='poster[i]'>")
        //     .attr("src", posterLink + posterPath)
        //     .css("height", "500px")
        //     .appendTo("body");
        // }
        ////////////////////////////////////////////////
        // END LOOP BLOCK
        ////////////////////////////////////////////////
        movies = findSimilar.results;
        conLog(movies);
        for (i = 0; i < 10; i++) {
          count = i;

          movieTitles = movies[i].title;
          movieOverview = movies[i].overview;
          movieID = movies[i].id;
          posterLink = "http://image.tmdb.org/t/p/w1280";
          posterPath = movies[i].poster_path;

          let $movieName = $("<p>").text(movieTitles);
          $("body").append($movieName);
          // conLog(movieOverview);
          // conLog(movieID);
          let $posterImage = $("<img class='posters' id='poster[i]'>")
            .attr("src", posterLink + posterPath)
            .css("height", "500px")
            .appendTo("body");
        }
      });
    });
  });
});
// I THINK right here you're gonna wanna put the input and get ID function in order to populate the "find similar movies" link with the necessary information
// make the find similar movies link populate the movies array
// make the carousel(probably directly in the css, make sure to look at some reference to see how that goes)
// make the scrolling div to accept the overview
// make the whole thing pretty
//?????
// profit

// for (i = 0; i < 10; i++) {
//   count = i;

//   movieTitles = movies[i].title;
//   movieOverview = movies[i].overview;
//   movieID = movies[i].id;
//   posterLink = "http://image.tmdb.org/t/p/w1280";
//   posterPath = movies[i].poster_path;

//   let $movieName = $("<p>").text(movieTitles);
//   $("body").append($movieName);
//   conLog(movieOverview);
//   conLog(movieID);
//   let $posterImage = $("<img class='posters' id='poster[i]'>")
//     .attr("src", posterLink + posterPath)
//     .css("height", "500px")
//     .appendTo("body");
// }

//
// // theMovieDb.common = {
// //   api_key: "242360b40786effa62d7b362929924c5",
// //   base_uri: "http://api.themoviedb.org/3/",
// //   images_uri: "http://image.tmdb.org/t/p/",
// //   timeout: 5000,
// //   language: "en-US"
// // };

////////////////////////////////////////////////////////////
//   $("body").on("click", "#button", event => {
//   });
////////////////////////////////////////////////////////////
