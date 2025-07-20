'use client';

import ChirpForm from '@/components/Chirps/ChirpForm';
import ChirpList from '@/components/Chirps/ChirpList';
import { useAuth } from '@/context/auth-context';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <main className="max-w-3xl mx-auto mt-12 px-6 sm:px-8 lg:px-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-100 drop-shadow-md">
        Micro-Chirp Feed
      </h1>

      {isLoggedIn ? (
        <ChirpForm />
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Please{' '}
          <a
            href="/auth/login"
            className="text-indigo-600 hover:text-indigo-700 underline font-semibold transition"
          >
            log in
          </a>{' '}
          to post a chirp.
        </p>
      )}

      <ChirpList />
    </main>
  );
}
