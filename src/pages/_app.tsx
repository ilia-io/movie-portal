import store from '@/store/store';
import '@/styles/globals.scss';
import Layout from '@/widgets/Layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/shared/config/muiTheme';
import { useEffect, useState } from 'react';
import mgr, { Film } from '@/types/film';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)

  const loadFilms = async () => {
    const res = await mgr.getFilms()
    setIsLoading(false)
    return res
  }

  useEffect(() => {
    loadFilms()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Provider store={store}>
          {!isLoading ? <Component {...pageProps} /> : <div>Waiting</div>}
        </Provider>
      </Layout>
    </ThemeProvider>
  );
}
