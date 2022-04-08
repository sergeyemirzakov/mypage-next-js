import styles from './MainScreen.module.css';

const MainScreen = () => {
  return (
    <div className="bg-blue-200 pt-20 border-b">
      <div className="container">
        <div className={styles.background + ' py-28'}>
          <h1
            className={styles.title + ' text-6xl mb-10 sm:text-7xl md:text-8xl'}
          >
            Stay curious.
          </h1>
          <h2 className="text-xl sm:text-2xl max-w-md mb-10">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <button className="bg-black text-white py-3 px-10 rounded-2xl">
            Start reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
