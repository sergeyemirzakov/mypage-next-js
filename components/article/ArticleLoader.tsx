import Spinner from '../preloaders/Spinner';

const ArticleLoader = () => {
  return (
    <>
      <div className="flex items-center">
        <Spinner color="black" size="30" />
        <h2 className="font-semibold ml-2">We are loading data for your</h2>
      </div>
    </>
  );
};

export default ArticleLoader;
