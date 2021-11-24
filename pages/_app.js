import '../styles/global.css';
import { SessionProvider } from 'next-auth/react'; // * Basically keep our session state through out our app when we switch pages and stuff!!
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
