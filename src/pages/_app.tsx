import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr/_internal';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource) => fetch(resource).then((res) => res.json()),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default App;
