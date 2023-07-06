import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Project from "./components/project/Project";
import Client from "./components/client/Client";
import AddClientModal from "./components/client/AddClientModal";
import Headers from "./components/header/Headers";

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
          <AddClientModal />
          <Project />
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
