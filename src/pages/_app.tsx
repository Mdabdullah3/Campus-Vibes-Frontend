import { store } from '@/redux/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app'; // Import AppProps from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Provide type annotations for getLayout and page
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactElement) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
