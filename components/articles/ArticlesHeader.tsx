import Link from 'next/link';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import useSWR, { mutate } from 'swr';
import { storage } from '../../lib/utils/storage';
import { favoriteArticle, unfavoriteArticle } from '../../lib/api/articles';
import { useState } from 'react';
import Spinner from '../preloaders/Spinner';
import UserName from '../user/UserName';

interface ArticleHeaderProps {
  authorImg: string;
  username: string;
  favoritesCount: number | string;
  slug: string;
  favorited: boolean;
}

const ArticleHeader = ({
  authorImg,
  username,
  favoritesCount,
  slug,
  favorited,
}: ArticleHeaderProps) => {
  const { data: user } = useSWR('user', storage);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavoriteArticle = async () => {
    if (!favorited) {
      try {
        setIsLoading(true);
        const response = await favoriteArticle(user?.token, slug);

        if (response?.data.article.favorited) setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        const response = await unfavoriteArticle(user?.token, slug);

        if (!response?.data.article.favorited) setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    mutate(process.env.NEXT_PUBLIC_ARTICLE_API);
  };

  return (
    <div className="flex justify-between">
      <UserName authorImg={authorImg} username={username} size="24" />
      <div
        onClick={toggleFavoriteArticle}
        className="text-sm bg-gray-200 flex items-center px-2 rounded-md h-[25px] text-gray-500 cursor-pointer"
      >
        <span className="mr-1 text-gray-500">
          {isLoading ? (
            <Spinner color="black" size="20" />
          ) : (
            <AiFillHeart color={favorited ? 'red' : ''} />
          )}
        </span>
        {favoritesCount}
      </div>
    </div>
  );
};

export default ArticleHeader;
