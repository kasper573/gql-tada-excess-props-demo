import { graphql, useMutation, useQuery } from "./client";

export function App() {
  const [mutationResult, sendStuff] = useMutation(mutateGQL);

  const exactInput = { foo: "hello", bar: 123 };

  const excessInput = { foo: "hello", bar: 123, excess: "excess" };

  return (
    <div>
      <pre>
        {JSON.stringify(
          {
            fetching: mutationResult.fetching,
            data: mutationResult.data,
            error: mutationResult.error,
          },
          null,
          2
        )}
      </pre>
      <button onClick={() => sendStuff({ input: exactInput })}>
        Send input to graphql server (with exact input)
      </button>
      <br />
      <button onClick={() => sendStuff({ input: excessInput })}>
        Send input to graphql server (with excess props on input)
      </button>
    </div>
  );
}

const mutateGQL = graphql(`
  mutation Mutate($input: Input!) {
    send(input: $input)
  }
`);
