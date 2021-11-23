import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/vendor/bootstrap/bootstrap.min.css" />
        <script src="/vendor/bootstrap/bootstrap.bundle.min.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet" />

        <script src="/vendor/jquery/jquery-3.5.1.slim.min.js"></script>

        <script src="/vendor/fontawesome/all.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
