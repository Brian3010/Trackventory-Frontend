import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// import { default as AuthToken, default as AuthTokenProvider } from './components/forms/AuthTokenProvider';
import AuthTokenProvider from './components/AuthTokenProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthTokenProvider />
        {children}
      </body>
    </html>
  );
}
