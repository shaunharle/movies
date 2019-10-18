conLog = input => {
  console.log(input);
};
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// This actually works to retrieve information from the objects but I broke it when trying to add a loop to it.
// $(() => {
//   //   let actionMovies = [];
//   //   let theMovieDb = {};
//   const actionMovies =
//     "https://api.themoviedb.org/3/discover/movie?api_key=242360b40786effa62d7b362929924c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en";
//   const bigBoss = data => {
//     // $("body").on("click", "#clickyBoi", event => {
//     const handleData = data => {
//       //   conLog(event.currentTarget);
//       //   for (i=0;i<10;i++)
//       conLog(data.results[3].title);
//     };

//     $.ajax({
//       url: actionMovies
//       //   data: { $limit: 10 }
//     }).then(handleData);

//     return data;
//     // });
//   };
//   //   conLog(actionMovies);
//   $.ajax({
//     url: actionMovies
//     // limit: { $limit: 10 }
//   }).then(bigBoss);
// });
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//
// // theMovieDb.common = {
// //   api_key: "242360b40786effa62d7b362929924c5",
// //   base_uri: "http://api.themoviedb.org/3/",
// //   images_uri: "http://image.tmdb.org/t/p/",
// //   timeout: 5000,
// //   language: "en-US"
// // };

$(() => {
  //   let actionMovies = [];
  //   let theMovieDb = {};
  const actionMovies =
    "https://api.themoviedb.org/3/discover/movie?api_key=242360b40786effa62d7b362929924c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en";

  let movies = [];
  let count = 0;
  //   conLog(count);
  //   conLog(movieTitles);

  $.ajax({
    url: actionMovies
    //   data: { $limit: 10 }
  }).then(data => {
    // I THINK right here you're gonna wanna put the input and get ID function in order to populate the "find similar movies" link with the necessary information
    // make the find similar movies link populate the movies array
    // make the carousel(probably directly in the css, make sure to look at some reference to see how that goes)
    // make the scrolling div to accept the overview
    // make the whole thing pretty
    //?????
    // profit
    movies = data.results;
    // conLog(movieTitles);
    for (i = 0; i < 10; i++) {
      // conLog("top of the loop plus i " + i);
      count = i;
      // conLog(count);
      movieTitles = movies[i].title;
      movieOverview = movies[i].overview;
      movieID = movies[i].id;
      posterLink = "http://image.tmdb.org/t/p/w1280";
      posterPath = movies[i].poster_path;
      //   conLog(movies[i]);
      let $movieName = $("<p>").text(movieTitles);
      $("body").append($movieName);
      conLog(movieOverview);
      conLog(movieID);
      let $posterImage = $("<img class='posters' id='poster[i]'>")
        .attr("src", posterLink + posterPath)
        .css("height", "500px")
        .appendTo("body");
      // return count;
    }
  });

  //   for (i = 0; i < 10; i++) {
  //     // conLog("top of the loop plus i " + i);
  //     count = i;
  //     // conLog(count);
  //     conLog(movieTitles[i]);
  //     //       let $testy = $("<p>").text(movies.title);
  //     //       $("body").append($testy);
  //     // return count;
  //   }
  //   conLog(count);

  //   conLog(movies[0]);
  //   const bigBoss = data => {
  ////////////////////////////////////////////////////////////
  //   $("body").on("click", "#button", event => {
  //   });
  ////////////////////////////////////////////////////////////
  //         let handleData = data => {
  //           conLog("top of the handleData function plus i  " + i);
  //           let $target = data.results[i].title;
  //           //   conLog(movies);
  //   };
  //   };
});
