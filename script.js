'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '')

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '')
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один из просмотренных фильмов?', ''),
              b = +prompt('на сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('просмотрено мало фильмов')
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersonalLevel()

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDb(personalMovieDB.privat)

function writeYourGenres() {
    for (let i=1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером: ${i}`, '')
    }
}

writeYourGenres()


console.log(personalMovieDB)