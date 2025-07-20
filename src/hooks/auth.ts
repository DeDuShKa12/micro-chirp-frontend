import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { registerUser, loginUser } from '@/lib/api';
import type { AuthData, AuthResponse } from '@/types/auth-types';

export const useRegister = (): UseMutationResult<AuthResponse, Error, AuthData> =>
  useMutation<AuthResponse, Error, AuthData>({
    mutationFn: registerUser,
  });

export const useLogin = (): UseMutationResult<AuthResponse, Error, AuthData> =>
  useMutation<AuthResponse, Error, AuthData>({
    mutationFn: loginUser,
  });
