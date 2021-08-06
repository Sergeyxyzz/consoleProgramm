let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

let a = prompt('один из просмотренных фильмов?', ''),
    b = +prompt('на сколько оцените его?', ''),
    c = prompt('один из просмотренных фильмов?', ''),
    d = +prompt('на сколько оцените его?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [a]: b,
        [c]: d
    },
    actors: {},
    genres: [],
    privat: false
}

console.log(personalMovieDB)
