import axios, { AxiosError } from 'axios';
import { ARTICLES_API } from '../endpoints/endpoints';

export const userProfile = async (token: string, username: string) => {
  try {
    const response = await axios.get(`${ARTICLES_API}?author=${username}`, {
      headers: {
        Authorization: 'Token ' + token,
      },
    });
    return response;
  } catch (error) {
    const err = error as AxiosError;
    return err.response;
  }
};
