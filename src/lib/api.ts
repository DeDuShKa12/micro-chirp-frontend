import { AuthData, AuthResponse } from "@/types/auth-types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';


export const registerUser = async (body: AuthData): Promise<AuthResponse> => {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const loginUser = async (body: AuthData): Promise<AuthResponse> => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
