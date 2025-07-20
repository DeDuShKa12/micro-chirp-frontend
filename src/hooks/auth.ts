import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { registerUser, loginUser } from '@/lib/api';
import type { AuthData, AuthResponse } from '@/types/auth-types';

export const useRegister = (
  options?: UseMutationOptions<AuthResponse, Error, AuthData>
): UseMutationResult<AuthResponse, Error, AuthData> => {
  return useMutation<AuthResponse, Error, AuthData>({
    mutationFn: registerUser,
    ...options,
  });
};

export const useLogin = (): UseMutationResult<AuthResponse, Error, AuthData> =>
  useMutation<AuthResponse, Error, AuthData>({
    mutationFn: loginUser,
  });
