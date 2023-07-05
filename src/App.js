import Client from "./components/Client";
import Headers from "./components/Headers";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Headers />
        <div className="conatiner">
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
