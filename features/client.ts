import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ExchangeSource } from '../constants'

export const uniClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2',
  }),
  cache: new InMemoryCache(),
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
})

export const sushiClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/zippoxer/sushiswap-subgraph-fork',
  }),
  cache: new InMemoryCache(),
})

export const masterChefClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/capnorange/sushiswap',
  }),
  cache: new InMemoryCache(),
})

export const exchangeClient: Record<ExchangeSource, ApolloClient<NormalizedCacheObject>> = {
  [ExchangeSource.UNISWAP]: uniClient,
  [ExchangeSource.SUSHISWAP]: sushiClient,
}

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
  }),
  cache: new InMemoryCache(),
})
