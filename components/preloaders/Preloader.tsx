import Spinner from './Spinner';

const Preloader = () => {
  return (
    <div className="container">
      <div className="relative">
        <div className="fixed bottom-[30px] right-[20px] z-[100]">
          <div className="w-[60px] bg-white p-2 rounded-xl">
            <Spinner color="black" size="40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
