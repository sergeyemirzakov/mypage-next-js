import Image from 'next/image';
import { ArticleProps } from './Article.props';
import { deleteArticle } from '../../lib/api/articles';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { storage } from '../../lib/utils/storage';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import UserName from '../user/UserName';

const Article = ({
  authorImg,
  username,
  articleImg,
  title,
  body,
  slug,
}: ArticleProps) => {
  const router = useRouter();
  const { data: user } = useSWR('user', storage);

  const removeArticle = async () => {
    await deleteArticle(user.token, slug);
    router.push('/');
  };

  const editArticle = async () => {
    router.push(`/edit/${slug}`);
  };

  return (
    <div className="w-[100%] md:w-[63%] px-5 whitespace-pre-line">
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center">
          <div className="flex mr-3">
            <UserName authorImg={authorImg} username={username} size="40" />
          </div>
        </div>
        <div className="text-sm flex items-center">
          {/* If you are not a Gerome you can delete an article */}
          {username !== 'Gerome' && (
            <div>
              <button
                onClick={editArticle}
                className="bg-gray-200 px-2 py-1 rounded-md text-gray-900 border border-gray-400 mr-2"
              >
                <span>
                  <AiOutlineEdit size="1.1rem" />
                </span>
              </button>
              <button
                onClick={removeArticle}
                className="bg-gray-200 px-2 py-1 rounded-md text-gray-900 border border-gray-400"
              >
                <AiFillDelete size="1.1rem" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="my-10">
        <Image
          src={articleImg}
          width="700px"
          height="400px"
          objectFit="cover"
        />
      </div>
      <div className="font-bold text-3xl my-10">{title}</div>
      <p className="whitespace-pre-line">{body}</p>
    </div>
  );
};

export default Article;
