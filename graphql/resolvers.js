import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
  Query: {
    getMovies: (_, { limit, rating }) => getMovies(limit, rating),
    getMovie: (_, { id }) => getMovie(id),
    getSuggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;