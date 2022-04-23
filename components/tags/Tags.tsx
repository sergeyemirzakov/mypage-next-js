import useSWR from 'swr';
import { tagsFetcher } from '../../lib/api/tags';
import TagsList from './TagsList';
import Spinner from '../preloaders/Spinner';

const Tags = () => {
  const { data, error } = useSWR('tags', tagsFetcher);
  return (
    <div className="flex md:flex flex-wrap pb-7">
      {error && (
        <h1 className="text-md font-semibold text-red-500">Server error</h1>
      )}
      {!data && !error && <Spinner color="black" size="30" />}
      {!!data && <TagsList tags={data.tags} />}
    </div>
  );
};

export default Tags;
