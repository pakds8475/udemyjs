const numberOfFilms = +prompt("сколько фильмов?", "3");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('one of thelast movie?', ''),
	  b = prompt('what reviews?', ''),
	  c = prompt('one of thelast movie?', ''),
	  d = prompt('what reviews?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);