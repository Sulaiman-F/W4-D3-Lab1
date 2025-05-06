const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];
console.log("the title of the first movie released after the year 2000.", movies.find((movie) => movie.year > 2000).title);

console.log("the title of the first movie with a rating higher than 9.", movies.find((movie) => movie.rating > 9).title);

console.log("the movies directed only by 'Christopher Nolan'.", movies.filter((movie) => movie.director === "Christopher Nolan"));

console.log("the movies that were released before the year 2010.", movies.filter((movie) => movie.year < 2010 ));

let titles = movies.map((movie) => {
    return movie.title
})
console.log("array containing only the movie titles.", titles);

let avg = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
console.log("the average rating of all movies.", avg);

console.log("Sort the movies by year (from oldest to newest).", movies.sort((a, b) => a.year - b.year));

console.log("Sort the movies by rating (from highest to lowest).", movies.sort((a, b) => b.rating - a.rating));

console.log("Are all movies rated higher than 8?", movies.every((movie) => movie.rating > 8))

console.log("Is there at least one movie released in the year 1999?", movies.some((movie) => movie.year === 1999))

let fristDirector = movies[0].director
console.log("Were all movies directed by the same director?", movies.every((movie) => fristDirector === movie.director))

console.log("Is there at least one movie with a rating lower than 8.5?", movies.some((movie) => movie.rating < 8.5))

