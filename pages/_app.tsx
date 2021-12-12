import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultHead from "@components/head/DefaultHead";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultHead/>
    <Component {...pageProps} />
  </>
}

export default MyApp
