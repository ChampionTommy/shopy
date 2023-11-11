'use client';

import '../styles/index.scss';
import { Inter } from 'next/font/google';
import { ReduxLayout } from 'redux/ReduxLayout';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={`shop__app ${inter.className}`}>
        <ReduxLayout>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ReduxLayout>
      </body>
    </html>
  );
}
