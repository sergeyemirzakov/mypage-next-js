import axios from 'axios';
import { ArticlesItems } from '../../interfaces/articles.interface';
import { ARTICLES_API } from '../endpoints/endpoints';

export const getArticles = async () => {
  const { data } = await axios.get<ArticlesItems>(ARTICLES_API);
  return data;
};
