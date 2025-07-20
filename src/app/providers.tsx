'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/context/auth-context';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </QueryClientProvider>
    </AuthProvider>
  );
}
