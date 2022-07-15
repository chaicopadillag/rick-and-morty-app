import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getEnvironments } from "../env";
console.log(getEnvironments().VITE_BASE_URL);
export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.VITE_BASE_URL || "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});
