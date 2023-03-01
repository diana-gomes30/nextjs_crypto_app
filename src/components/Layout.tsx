import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="m-0 p-0 box-border">
        <Navbar />
        <div className="min-h-screen bg-secundary-dark-blue">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
