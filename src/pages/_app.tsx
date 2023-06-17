import store from '@/store/store';
import '@/styles/globals.scss';
import Layout from '@/widgets/Layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/shared/config/muiTheme';
import '../widgets/MainPage/PromoCarousel/Carousel.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
