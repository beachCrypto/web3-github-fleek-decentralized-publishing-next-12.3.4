import { Html, Head, Main, NextScript } from 'next/document';
import { Providers } from '@/Providers';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-orange-50 overflow-y-scroll pb-36">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
