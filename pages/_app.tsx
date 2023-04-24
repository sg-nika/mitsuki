import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { IBM_Plex_Mono } from '@next/font/google';

const IBM = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '100'
});

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <main >
      <Component {...pageProps} />
    </main>
  </>

}
