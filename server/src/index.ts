import { ApolloServer } from 'apollo-server-express';
import "dotenv/config";
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as session from 'express-session';
import { resolvers } from './schema/resolves';
import { typeDefs } from './schema/typeDefs';

const startServer = async () => {
  let con = await mongoose.connect('mongodb://localhost:27017/stripe-example', { useNewUrlParser: true });
  const apolloSever = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
  });

  const app: express.Application = express();
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: "sdSDAFDAF"
    })
  );

  apolloSever.applyMiddleware({
    app, cors: {
      credentials: true,
      origin: 'http://localhost:3000'
    }
  });

  const port = process.env.PORT || 4000;
  if (con) app.listen(port, () =>
    console.log(`server ready at http://localhost:${port}${apolloSever.graphqlPath}`));

}

startServer();