import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '../UserProvider';
import { NhostProvider, NhostClient } from '@nhost/nextjs';


const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || 'ctzrqiexgysncscklyqy',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || 'eu-west-2'
});




function MyApp({ Component, pageProps }) {
  return (
  <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
    <UserProvider>
      <Component {...pageProps} />
      <Toaster />
    </UserProvider>
   </NhostProvider>

  );
}

export default MyApp;
