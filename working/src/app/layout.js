import React from 'react';

import Header from '../components/Header';
import SoundProvider from "../components/SoundProvider";

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <SoundProvider>
        <Header />
        {children}
        <footer>
          <img src="/ie-badge.gif" width={100}  alt=''/>
          <span>Thanks for visiting!</span>
        </footer>
      </SoundProvider>
      </body>
    </html>
  );
}

export default RootLayout;
