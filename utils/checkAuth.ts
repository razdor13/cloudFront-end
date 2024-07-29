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
    axios.defaults.headers.Authorization = "Bearer " + token;
    await Api.auth.getMe();
    return true;
  } catch (err) {
    redirect('/dashboard/auth');
  }
};