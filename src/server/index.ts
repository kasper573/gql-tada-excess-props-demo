import { createServer } from "http";
import { createYoga, createSchema } from "graphql-yoga";
import * as fs from "fs";
import * as path from "path";
import { pathname, port } from "../settings";

const schema = createSchema({
  typeDefs: fs.readFileSync(path.resolve(__dirname, "schema.graphql"), "utf-8"),
  resolvers: {
    Query: {
      hello(_, _args, context) {
        return "Hello World";
      },
    },
  },
});

const yoga = createYoga({ schema, graphqlEndpoint: pathname });
const server = createServer(yoga);
server.listen(port, () => {
  console.log(`API available on http://localhost:${port}${pathname}`);
});
