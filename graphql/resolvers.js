const Jeckson = {
  name: 'jeckson',
  age: 31,
  gender: 'male',
}

const resolvers = {
  Query: {
    person: () => Jeckson,
  }
}

export default resolvers;