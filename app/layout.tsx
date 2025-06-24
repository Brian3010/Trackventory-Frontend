import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { default as AuthToken, default as AuthTokenProvider } from './components/forms/AuthTokenProvider';
import AuthTokenProvider from './components/AuthTokenProvider';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Trackventory',
  description: 'Inventory Management App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthTokenProvider />

        <div className="flex h-screen">
          <SideBar />
          <main className="flex-1 overflow-auto ">
            <Header />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
