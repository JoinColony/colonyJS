import { createClient } from '@urql/core';
import fetch from 'cross-fetch';

export const USE_THE_GRAPH = true;

export const client = createClient({
  fetch,
  url: 'https://xdai.colony.io/graph/subgraphs/name/joinColony/subgraph',
});
