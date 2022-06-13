import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://k2uki1ptbuy9.usemoralis.com:2053/server'
      appId='9wWyNC0FBWLWQXfoJ5DRlO5LZ2QTtBJkxjJKYm01'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp
