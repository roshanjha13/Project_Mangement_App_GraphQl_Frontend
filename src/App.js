import Client from "./components/Client";
import Headers from "./components/Headers";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Headers />
        <div className="conatiner">
          <h1>Hello World</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
