import useSWR from 'swr';
import TagsList from './TagsList';
import Spinner from '../preloaders/Spinner';
import fetcher from '../../lib/utils/fetcher';

const Tags = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_TAGS_API, fetcher);

  return (
    <div className="flex md:flex flex-wrap pb-7">
      {error && (
        <h2 className="text-md font-semibold text-red-500">Server error</h2>
      )}
      {!data && !error && <Spinner color="black" size="30" />}
      {!!data && <TagsList tags={data.tags} />}
    </div>
  );
};

export default Tags;
