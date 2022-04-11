import { MainScreenProps } from './MainScreen.props';

const MainScreen = ({ openDialogModal }: MainScreenProps) => {
  return (
    <div className={'bg-blue-200 pt-20 border-b-1 border-black'}>
      <div className="container">
        <div className="py-28 bg-none md:bg-[url('/images/bg.png')] bg-[length:420px] bg-right-bottom bg-no-repeat">
          <h1 className={'font-serif text-6xl mb-10 sm:text-7xl md:text-8xl'}>
            Stay curious.
          </h1>
          <h2 className="text-xl sm:text-2xl max-w-md mb-10">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <button
            onClick={openDialogModal}
            className="bg-black text-white py-3 px-10 rounded-2xl"
          >
            Start reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
