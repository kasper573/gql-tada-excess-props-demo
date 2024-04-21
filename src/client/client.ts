import { Client, cacheExchange, fetchExchange } from "urql";
import { pathname, port } from "../settings";

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
