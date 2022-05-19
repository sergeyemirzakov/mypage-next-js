import axios, { AxiosError } from 'axios';
import { ArticlesItems } from '../../interfaces/articles.interface';
import { ARTICLES_API } from '../endpoints/endpoints';

export const getArticles = async () => {
  const { data } = await axios.get<ArticlesItems>(ARTICLES_API);
  return data;
};

export const createArticle = async (
  token: string,
  title: string,
  description: string,
  body: string,
  tagList?: string[] | string
) => {
  try {
    const response = await axios.post(
      ARTICLES_API,
      JSON.stringify({ article: { title, description, body, tagList } }),
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

export const getArticleComments = async (slug: string, token: string) => {
  const { data } = await axios.get(ARTICLES_API + '/' + slug + '/comments', {
    headers: {
      Authorization: 'Token ' + token,
    },
  });
  return data;
};

export const addArticleComments = async (
  slug: string,
  commentText: string,
  token: string
) => {
  try {
    const response = await axios.post(
      ARTICLES_API + '/' + slug + '/comments',
      JSON.stringify({ comment: { body: commentText } }),
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

export const removeArticleComment = async (
  slug: string,
  token: string,
  id: string
) => {
  try {
    const response = await axios.delete(
      ARTICLES_API + '/' + slug + '/comments/' + id,
      {
        headers: {
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

export const deleteArticle = async (token: string, slug: string) => {
  try {
    const response = await axios.delete(`${ARTICLES_API}/${slug}`, {
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

export const editArticle = async (
  slug: string,
  token: string,
  title?: string,
  description?: string,
  body?: string,
  tagList?: string[] | string
) => {
  return await axios.put(
    `${ARTICLES_API}/${slug}`,
    JSON.stringify({ article: { title, description, body, tagList } }),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
      },
    }
  );
};

export const favoriteArticle = async (token: string, slug: string) => {
  try {
    const response = await axios.post(
      `${ARTICLES_API}/${slug}/favorite`,
      {},
      {
        headers: {
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

export const unfavoriteArticle = async (token: string, slug: string) => {
  try {
    const response = await axios.delete(`${ARTICLES_API}/${slug}/favorite`, {
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
