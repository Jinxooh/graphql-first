const People = [
  {
    id: 0,
    name: 'jeckson',
    age: 31,
    gender: 'male',
  },
  {
    id: 1,
    name: 'jeckson1',
    age: 11,
    gender: 'male2',
  },
  {
    id: 2,
    name: 'jeckson2',
    age: 21,
    gender: 'male3',
  },
]

const getById = id => People.filter(person => person.id === id)[0];

const resolvers = {
  Query: {
    people: () => People,
    person: (_, { id }) => getById(id),
  }
}

export default resolvers;