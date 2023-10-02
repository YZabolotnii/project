"use strict";

const numberOfFilms = +prompt('How many films did you wach?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privan: false
};

const a = prompt('Which one was last?', ''),
      b = prompt('Which mark?', ''),
      c = prompt('Which one was last?', ''),
      d = prompt('Which mark?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





