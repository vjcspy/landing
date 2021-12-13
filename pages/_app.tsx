import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultHead from "@components/head/DefaultHead";
import Script from "next/script";
import React from "react";
let first = true;
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultHead/>
    <Component {...pageProps} />
  </>
}

export default MyApp
