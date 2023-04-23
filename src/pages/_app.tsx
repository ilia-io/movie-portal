import store from '@/store/store';
import '@/styles/globals.scss';
import Layout from '@/widgets/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/shared/config/muiTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ThemeProvider>
  );
}
