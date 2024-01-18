import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Alata, Josefin_Sans} from 'next/font/google';

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alata',
});

const josefinSans = Josefin_Sans({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefinSans',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${alata.variable} ${josefinSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
