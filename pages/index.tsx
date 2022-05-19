import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import MainScreen from '../components/main-screen/MainScreen';
import Article from '../components/articles/Articles';
import Sidebar from '../components/sidebar/Sidebar';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainScreen />
      <div className="pt-20">
        <div className="container">
          <div className="flex flex-col md:flex md:flex-row">
            {/* ArticleLoader */}
            <Article />
            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
