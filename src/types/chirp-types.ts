export interface Chirp {
  id: number;
  content: string;
  username: string;
  created_at: string;
}

export interface CreateChirpParams {
  content: string;
  token: string;
}