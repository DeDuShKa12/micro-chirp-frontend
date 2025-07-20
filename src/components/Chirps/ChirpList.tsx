'use client';

import { useQuery } from '@tanstack/react-query';
import { getAllChirps } from '@/lib/chirps';
import { Chirp } from '@/types/chirp-types';

export default function ChirpList() {
  const { data, isLoading } = useQuery<Chirp[]>({
    queryKey: ['chirps'],
    queryFn: getAllChirps,
  });

  if (isLoading)
    return (
      <p className="text-center text-gray-500 mt-6 animate-pulse">
        Loading chirps...
      </p>
    );

  if (!data || data.length === 0)
    return (
      <p className="text-center text-gray-400 mt-6 italic">
        No chirps yet. Be the first!
      </p>
    );

  return (
    <div className="space-y-6">
      {data.map((chirp) => (
        <div
          key={chirp.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-xs text-indigo-600 font-semibold mb-1">
            @{chirp.username} •{' '}
            <time
              dateTime={chirp.created_at}
              className="text-gray-400 dark:text-gray-500"
            >
              {new Date(chirp.created_at).toLocaleString()}
            </time>
          </p>
          <p className="text-gray-900 dark:text-gray-100 text-base leading-relaxed whitespace-pre-wrap">
            {chirp.content}
          </p>
        </div>
      ))}
    </div>
  );
}
