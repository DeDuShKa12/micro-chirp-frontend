'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/context/auth-context';
import { Header } from './Header/Header';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const { isLoggedIn, logout, isAuthLoaded } = useAuth();

  if (!isAuthLoaded) return null;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={logout} />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">{children}</main>
    </>
  );
}
