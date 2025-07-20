import { Chirp, CreateChirpParams } from "@/types/chirp-types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const getAllChirps = async (): Promise<Chirp[]> => {
  const res = await fetch(`${baseUrl}/chirps`);
  const data = await res.json();
  return data.chirps;
};

export const createChirp = async ({ content, token }: CreateChirpParams): Promise<Chirp> => {
  const res = await fetch(`${baseUrl}/chirps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) throw new Error('Failed to post chirp');

  const data: Chirp = await res.json();
  return data;
};
