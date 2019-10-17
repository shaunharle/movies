conLog = input => {
  console.log(input);
};

$(() => {
  //   let actionMovies = [];
  //   let theMovieDb = {};
  const actionMovies =
    "https://api.themoviedb.org/3/discover/movie?api_key=242360b40786effa62d7b362929924c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en";
  const bigBoss = data => {
    // $("body").on("click", "#clickyBoi", event => {
    const handleData = data => {
      //   conLog(event.currentTarget);
      //   for (i=0;i<10;i++)
      conLog(data.results[3].title);
    };

    $.ajax({
      url: actionMovies
      //   data: { $limit: 10 }
    }).then(handleData);

    return data;
    // });
  };
  //   conLog(actionMovies);
  $.ajax({
    url: actionMovies
    // limit: { $limit: 10 }
  }).then(bigBoss);
});
////////////////////////////////////////////////

//
// // theMovieDb.common = {
// //   api_key: "242360b40786effa62d7b362929924c5",
// //   base_uri: "http://api.themoviedb.org/3/",
// //   images_uri: "http://image.tmdb.org/t/p/",
// //   timeout: 5000,
// //   language: "en-US"
// // };
