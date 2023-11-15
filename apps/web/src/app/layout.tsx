'use client';

import '../styles/index.scss';
import { Inter } from 'next/font/google';
import { ReduxLayout } from 'redux/ReduxLayout';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang="en">
      <body className={`shop__app ${inter.className}`}>
        <ReduxLayout>
          {children}
        </ReduxLayout>
      </body>
    </html>
  );
}
