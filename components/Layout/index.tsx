import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className='container max-w-7xl m-auto prose-xl'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
