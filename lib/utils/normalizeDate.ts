import { format, parseISO } from 'date-fns';

export const normalizeArticleDate = (date: string) => {
  return format(parseISO(date), 'MM LLL');
};
