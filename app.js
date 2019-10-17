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
  $.ajax({
    url: actionMovies
    //   data: { $limit: 10 }
  }).then(data => {
    movies = data.results;
    conLog(movies);
  });
  //   const bigBoss = data => {
  //     $("body").on("click", "#button", event => {
  //       for (i = 0; i < 10; i++) {
  //         conLog("top of the loop plus i " + i);
  //         let handleData = data => {
  //           conLog("top of the handleData function plus i  " + i);
  //           let $target = data.results[i].title;
  //           //   conLog(actionMovies);
  //           let $testy = $("<p>").text($target);
  //           $("body").append($testy);
  //         };
  //       }
  //       return data;
  // });
  //   };
  //   conLog(actionMovies);
  //   $.ajax({
  //     url: actionMovies
  //     // limit: { $limit: 10 }
  //   }).then(bigBoss);
});
