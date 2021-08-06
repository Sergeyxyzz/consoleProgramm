'use strict'

const numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    const a = prompt('один из просмотренных фильмов?', ''),
          b = +prompt('на сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}


if (personalMovieDB.count <= 10) {
    console.log('просмотрено мало фильмов')
} else if (personalMovieDB.count <= 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}


console.log(personalMovieDB)

