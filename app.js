conLog = input => {
  console.log(input);
};

$(() => {
  //   const $queryLink = "https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=242360b40786effa62d7b362929924c5&language=en-US&page=1"
  const actionMovies =
    "https://api.themoviedb.org/3/discover/movie?api_key=242360b40786effa62d7b362929924c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en";
  // LET INPUT ID??????????
  let movies = [];
  let count = 0;

  $.ajax({
    // MAKE SURE TO CHANGE URL
    url: actionMovies
    /////////////////////////////////
  }).then(data => {
    $("form").on("submit", () => {
      event.preventDefault();
      const $inputBox = $("#input-box");
      const $inputValue = $inputBox.val();
      const $fixedInput = $inputValue.replace(/ /g, "+");
      searchLink =
        `https://api.themoviedb.org/3/search/movie?api_key=242360b40786effa62d7b362929924c5&query=` +
        $fixedInput;

      $.ajax({
        url: searchLink
      }).then(grabID => {
        inputID = grabID.results[0].id;
        conLog(inputID);
        /////////////////////////////////////////////
        /////////////////////////////////////////////
        // USE ANOTHER AJAX FUNCTION HERE TO POPULATE MOVIES ARRAY AND THEN YOU'RE CLOSE. HOME STRETCH, IT SEEMS.
        /////////////////////////////////////////////
        /////////////////////////////////////////////
      });

      //   conLog($inputValue);
      conLog(event);
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
    movies = data.results;
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
