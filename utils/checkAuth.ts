import axios from "@/core/axios";
import * as Api from "@/api";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const checkAuth = async () => {
  try {
    // Retrieve the token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('_token')?.value;

    if (!token) {
      throw new Error('No token found');
    }

    // Set the token in the axios header
    axios.defaults.headers.Authorization = "Bearer " + token;

    // Attempt to fetch user data
    await Api.auth.getMe();

    // If successful, return true
    return true;
  } catch (err) {
    // On error, redirect to the authentication page
    redirect('/dashboard/auth');
  }
};