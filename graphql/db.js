let Movies = [
  {
    id: 0,
    name: 'Star wars',
    score: 18
  },
  {
    id: 1,
    name: 'Ant man',
    score: 99
  },
  {
    id: 2,
    name: 'Avengers',
    score: 79
  },
  {
    id: 3,
    name: 'Wicker Park',
    score: 0.1
  },
  {
    id: 4,
    name: 'Logan',
    score: 23
  },
]
export const getMovies = () => Movies;

export const getMovieById = id => Movies.filter(moive => moive.id === id)[0];

export const deleteMovie = id => {
  Movies = Movies.filter(movie => movie.id !== id);
  return true;
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: Movies.length,
    name,
    score,
  };

  Movies.push(newMovie);
  return newMovie;
}