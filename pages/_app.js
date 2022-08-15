import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Script from "next/script";
import Head from "next/head";
import { Provider } from 'react-redux';
import {store} from '../components/redux/store'

function MyApp({ Component, pageProps }) {
  return(
    <>
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel='icon' href='./favicon.svg' />
  <title>ShopGrid</title>
</Head>
  <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  crossOrigin="anonymous"
/>
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </>
  )
}

export default MyApp
