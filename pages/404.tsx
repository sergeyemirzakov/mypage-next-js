import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-blue-800">
          404 - Page Not Found🙄
        </h1>
        <div className="m-4">
          <Link href="/">
            <a className="text-2xl font-bold text-slate-800">Back to home</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
