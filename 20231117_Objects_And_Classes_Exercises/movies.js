function moviesWithCompleteInfo(moviesArr) {
  let movieObjects = [];

  function addMovie(input) {
    movieObjects.push({ name: input.slice(9) });
  }

  function addDirector(input) {
    let title = input.split(" directedBy ")[0];
    let director = input.split(" directedBy ")[1];
    movieObjects.map((movie) => {
      if (movie.name === title) {
        movie.director = director;
      }
    });
  }

  function addDate(input) {
    let title = input.split(" onDate ")[0];
    let date = input.split(" onDate ")[1];
    movieObjects.map((movie) => {
      if (movie.name === title) {
        movie.date = date;
      }
    });
  }

  for (const inputData of moviesArr) {
    if (inputData.includes("addMovie")) {
      addMovie(inputData);
    } else if (inputData.includes("directedBy")) {
      addDirector(inputData);
    } else if (inputData.includes("onDate")) {
      addDate(inputData);
    }
  }

  for (const movie of movieObjects) {
    if (Object.keys(movie).length === 3) {
      console.log(JSON.stringify(movie));
    }
  }
}
moviesWithCompleteInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
moviesWithCompleteInfo([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
