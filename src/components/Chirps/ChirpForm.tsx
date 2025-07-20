'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChirp } from '@/lib/chirps';

export default function ChirpForm() {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const {mutateAsync, isPending } = useMutation({
    mutationFn: createChirp,
    onSuccess: () => {
      setContent('');
      queryClient.invalidateQueries({ queryKey: ['chirps'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Not authenticated');
    if (content.trim().length === 0) return alert('Content cannot be empty');
    mutateAsync({ content: content.trim(), token });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      <textarea
        className="w-full resize-none border border-gray-300 dark:border-gray-600 rounded-md p-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        rows={4}
        maxLength={280}
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end mt-3">
        <button
          type="submit"
          disabled={isPending}
          className={`inline-flex items-center justify-center px-5 py-2 font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition ${
            isPending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isPending ? 'Chirping...' : 'Chirp'}
        </button>
      </div>
    </form>
  );
}
