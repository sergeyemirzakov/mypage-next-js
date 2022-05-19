import axios, { AxiosError } from 'axios';

import {
  LOGIN_USER,
  GET_CURRENT_USER,
  REGISTER_USER,
} from '../endpoints/endpoints';

// Login
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      LOGIN_USER,
      JSON.stringify({ user: { email, password } }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    const err = error as AxiosError;
    return err.response;
  }
};

// Register
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(
      REGISTER_USER,
      JSON.stringify({ user: { username, email, password } }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error: any) {
    const err = error as AxiosError;
    return err.response;
  }
};

// Get current user
export const getCurrentUser = () => {
  const config = {
    headers: {
      Authorization: 'Token ' + sessionStorage.getItem('token'),
    },
  };
  try {
    return axios.get(GET_CURRENT_USER, config);
  } catch (err: any) {
    return err.response;
  }
};

// Log out
export const logoutUser = async (key: string) => {
  sessionStorage.removeItem(key);
};

// Update user
export const updateUser = async (
  token?: string,
  email?: string,
  username?: string,
  password?: string,
  bio?: string,
  image?: string
) => {
  try {
    const response = await axios.put(
      GET_CURRENT_USER,
      JSON.stringify({ user: { email, username, password, bio, image } }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
        },
      }
    );
    return response;
  } catch (error) {
    const err = error as AxiosError;
    return err.response;
  }
};
