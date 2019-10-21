conLog = input => {
  console.log(input);
};

$(() => {
  // let currentImgIndex = 0;
  // let highestIndex = $(".carousel-images").children().length - 1;
  // // next button
  // $(".next").on("click", () => {
  //   // hide current image
  //   $(".carousel-images")
  //     .children()
  //     .eq(currentImgIndex)
  //     .css("display", "none");
  //   // increment image index
  //   if (currentImgIndex < highestIndex) {
  //     currentImgIndex++;
  //   } else {
  //     currentImgIndex = 0;
  //   }

  //   // show current image
  //   $(".carousel-images")
  //     .children()
  //     .eq(currentImgIndex)
  //     .css("display", "block");
  // });

  // $(".previous").on("click", () => {
  //   // hide current image
  //   $(".carousel-images")
  //     .children()
  //     .eq(currentImgIndex)
  //     .css("display", "none");
  //   // decrement the image index
  //   if (currentImgIndex > 0) {
  //     currentImgIndex--;
  //   } else {
  //     currentImgIndex = highestIndex;
  //   }
  //   // show current image
  //   $(".carousel-images")
  //     .children()
  //     .eq(currentImgIndex)
  //     .css("display", "block");
  // });
  ////////////////////////////////////////////////////////////////////////
  $("form").on("submit", () => {
    $(".carousel-images").empty();
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

          // let $movieName = $("<p>").text(movieTitles);
          // $("#movieDiv").append($movieName);
          let $posterImage = $("<img>")
            .attr("src", posterLink + posterPath)
            // .attr("id", `${"poster" + i}`)
            // .css("height", "500px")
            .appendTo(".carousel-images");
        }
      });
    });
  });
  conLog("testyboi");
  let currentImgIndex = 0;
  let highestIndex = $(".carousel-images").children().length - 1;
  // next button
  $(".next").on("click", () => {
    // hide current image
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");
    // increment image index
    if (currentImgIndex < highestIndex) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }

    // show current image
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });

  $(".previous").on("click", () => {
    // hide current image
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");
    // decrement the image index
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = highestIndex;
    }
    // show current image
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
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
