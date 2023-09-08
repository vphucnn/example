import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectV2Card from '../components/connectorCards/WalletConnectV2Card'
import ProviderExample from '../components/ProviderExample'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function Home() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ProviderExample />
        <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
          <MetaMaskCard />
          <WalletConnectV2Card />
          <CoinbaseWalletCard />
          <NetworkCard />
          <GnosisSafeCard />
        </div>
      </Web3ReactProvider>

    </>
  )
}
