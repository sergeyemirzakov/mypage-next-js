import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { mutate } from 'swr';
import { useRouter } from 'next/router';

const UserPanel = () => {
  const router = useRouter();

  const logoutUser = () => {
    mutate('user', sessionStorage.removeItem('user'));
    mutate(process.env.NEXT_PUBLIC_ARTICLE_API);
    mutate(process.env.NEXT_PUBLIC_TAGS_API);
  };

  return (
    <div className="p-3 bg-white text-left rounded-md">
      <ul>
        <li
          className="mb-3 cursor-pointer"
          onClick={() => router.push('/user')}
        >
          <span className="flex items-center">
            <span className="mr-1">
              <AiFillSetting />
            </span>
            Settings
          </span>
        </li>
        <li onClick={logoutUser} className="cursor-pointer">
          <span className="flex items-center">
            <span className="mr-1">
              <BiLogOut />
            </span>
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserPanel;
