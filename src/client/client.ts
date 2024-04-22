import { Client, cacheExchange, fetchExchange } from "urql";
import { pathname, port } from "../settings";
import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./schema.generated.d.ts";

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";

export { useQuery, useMutation } from "urql";

export const graphql = initGraphQLTada<{
  introspection: introspection;
}>();

export function createClient() {
  const url = createGraphQLEndpointUrl();
  return new Client({
    url,
    exchanges: [cacheExchange, fetchExchange],
  });
}

function createGraphQLEndpointUrl() {
  const url = new URL(window.location.href);
  url.pathname = pathname;
  url.port = `${port}`;
  return url.toString();
}
