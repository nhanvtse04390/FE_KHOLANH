import axiosInstance from './axiosInstance';
import { SignInResponse } from '../types/auth';

export const signin = async (
    username: string,
    password: string
): Promise<SignInResponse> => {
    const response = await axiosInstance.post<SignInResponse>('/api/auth/signin', {
        username,
        password,
    });

    return response.data;
};
