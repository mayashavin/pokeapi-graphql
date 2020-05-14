import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

const port = process.env.PORT || 8080;
const app = express();
const apolloServer = new ApolloServer(schema);
apolloServer.applyMiddleware({ app, path: "/api" });
app.use(cors());

app.listen({ port }, () => {
  console.log(
    `🚀 Server ready http://localhost:${port}${apolloServer.graphqlPath}`
  );
});
