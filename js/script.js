"use strict";

const numberOfFilms = +prompt('How many films did you wach?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Which one was last?', ''),
          b = prompt('Which mark?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('You wached not many films:(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic films watcher:)');
} else if (personalMovieDB.count >= 30) {
    console.log('You are films fanat;)');
} else {
    console.log('Error 404');
};

console.log(personalMovieDB);





