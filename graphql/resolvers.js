import { getMovies, getMovieById, addMovie, deleteMovie } from './db';

const resolvers = {
  Query: {
    getMovies: () => getMovies(),
    getMovieById: (_, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_, { name, score}) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;