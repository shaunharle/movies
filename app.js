conLog = input => {
  console.log(input);
};

$(() => {
  $("form").on("submit", () => {
    $("#movieDiv").empty();
    event.preventDefault();
    let movies = [];
    const $inputBox = $("#input-box");
    const $inputValue = $inputBox.val();
    const $fixedInput = $inputValue.replace(/ /g, "+");
    searchLink =
      `https://api.themoviedb.org/3/search/movie?api_key=242360b40786effa62d7b362929924c5&query=` +
      $fixedInput;
    $(event.currentTarget).trigger("reset");
    $.ajax({
      url: searchLink
    }).then(grabID => {
      inputID = grabID.results[0].id;
      conLog("input id: " + inputID);

      const $queryLink = `https://api.themoviedb.org/3/movie/${inputID}/similar?api_key=242360b40786effa62d7b362929924c5&language=en-US&page=1`;
      conLog($queryLink);

      let count = 0;

      $.ajax({
        url: $queryLink
      }).then(findSimilar => {
        movies = [];
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
          $("#movieDiv").append($movieName);
          let $posterImage = $("<img class='posters' id='poster[i]'>")
            .attr("src", posterLink + posterPath)
            .css("height", "500px")
            .appendTo("#movieDiv");
        }
      });
    });
  });
});

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
