import '../styles/globals.css';
import { Header, Footer } from './components';
import { FC, PropsWithChildren } from 'react';

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='layout'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
