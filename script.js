'use strict'

const personalMovieDB = {
    count: 0,
    start: function() {
        this.count = +prompt('Сколько фильмов вы посмотрели?')
        while(this.count === '' || this.count === null || isNaN(this.count)) {
            this.count = prompt('Сколько фильмов вы посмотрели?')
        }
    },
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('один из просмотренных фильмов?', ''),
                  b = +prompt('на сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count <= 10) {
            console.log('просмотрено мало фильмов')
        } else if (this.count <= 30) {
            console.log('Вы классический зритель')
        } else if (this.count > 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function() {
        let i = 1;
        for (; i <= 3; i++){
            this.genres[i-1] = prompt(`Ваш любимый жанр под номером: ${i}`, '')
            for (let it of this.genres) {
                if (it === null || it === '') {
                    i--
                }
            }
        }
        this.genres.forEach((it,i) => {
            console.log(`Любимый жанр под номером ${++i} - это ${it}`)
        })
    },
    toggleVisibleMyDB: function() {
        if (this.privat === false) {
            this.privat = true
        } else {
            this.privat = false
        }
    }
}

personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.writeYourGenres()
// personalMovieDB.showMyDb(personalMovieDB.privat)
// personalMovieDB.toggleVisibleMyDB()

console.log(personalMovieDB)
console.log(personalMovieDB.privat)