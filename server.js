const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { PORT, DB } = require('./config');

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
});

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongodb connected...');
    return server.listen(PORT);
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  })
  .catch(err => console.log(err));
