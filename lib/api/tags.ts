import axios from 'axios';
import { TAGS_API } from '../endpoints/endpoints';
import { TagsItems } from '../../interfaces/tags.interface';

export const tagsFetcher = async () => {
  const { data } = await axios.get<TagsItems>(TAGS_API);
  return data;
};
