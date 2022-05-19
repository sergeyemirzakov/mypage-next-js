import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  getArticleComments,
  addArticleComments,
  removeArticleComment,
} from '../../lib/api/articles';
import { storage } from '../../lib/utils/storage';
import Spinner from '../preloaders/Spinner';
import { AiFillDelete } from 'react-icons/ai';

interface ArticleCommentsProps {
  slug: string;
}

const ArticleComments = ({ slug }: ArticleCommentsProps) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { data: user } = useSWR('user', storage);
  const { data } = useSWR('comments', () =>
    getArticleComments(slug, user.token)
  );

  const isLoggedIn = !!user;

  const [commentText, setCommentText] = useState('');

  const onAddComment = async () => {
    await addArticleComments(slug, commentText, user.token);
    mutate('comments');
    setCommentText('');
  };

  const onRemoveComment = async (id: string) => {
    await removeArticleComment(slug, user.token, id);
    mutate('comments');
  };

  // If user isn`t logged, we don`t show comments component
  if (!isLoggedIn) {
    return (
      <div className="border border-gray-300 bg-gray-100 rounded-md p-2 ml-3 mt-8 max-h-[80px]">
        <p className="text-sm">You need to login to read or write comments</p>
        <button
          onClick={() => router.push('/login')}
          className="mt-2 bg-black text-white px-5 py-1 rounded-xl"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="w-[100%] md:w-[30%] flex flex-col ml-3 mt-8">
      <div className="sticky top-[112px]">
        <div className="mb-3">
          <h2 className="font-semibold">Comments: </h2>
        </div>
        {data === undefined && <Spinner color="black" size="30" />}
        <div className="max-h-[500px] overflow-y-auto">
          {!!data &&
            data.comments.map((comment: any) => (
              <div
                key={comment.id}
                className="p-2 border border-gray-300 rounded-md bg-gray-100 mb-2"
              >
                {/* Comment header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 flex">
                      <Image
                        className="rounded-full"
                        src={comment?.author?.image}
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="text-sm font-semibold">
                      {comment?.author?.username}
                    </div>
                  </div>
                  <div
                    onClick={() => onRemoveComment(comment.id)}
                    className="cursor-pointer"
                  >
                    <span className="text-gray-500">
                      {comment.author?.username !== 'Gerome' && (
                        <AiFillDelete />
                      )}
                    </span>
                  </div>
                </div>
                {/* Comment body */}
                <div className="mt-2">
                  <p className="text-sm">{comment.body}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-5">
          <div className="mb-2">
            <textarea
              className="w-full h-[100px] border border-gray-300 p-1 text-sm resize-none"
              name=""
              id=""
              placeholder="Leave your comment"
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            />
          </div>
          <button
            onClick={onAddComment}
            className="bg-black px-3 py-2 rounded-lg text-sm text-white"
          >
            Send comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleComments;
