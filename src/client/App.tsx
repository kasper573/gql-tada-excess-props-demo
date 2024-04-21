import { gql, useQuery } from 'urql';

export function App() {
  const [result] = useQuery({
    query: helloGQL,
    requestPolicy: 'cache-and-network',
  });

  const { data, fetching, error } = result;

  return (
    <div>
      {fetching && <p>Loading...</p>}
      {error && <p>Oh no... {error.message}</p>}
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
    </div>
  );
}

const helloGQL = gql`
  query Hello {
    hello
  }
`;
