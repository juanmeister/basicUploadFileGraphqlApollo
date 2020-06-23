const { ApolloServer } = require("apollo-server");
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});


server.listen().then(({ url }) => {
  console.log(`🚀 Servidor corriendo en: ${url}`);
});