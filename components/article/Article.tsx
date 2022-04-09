import Link from 'next/link';
import Image from 'next/image';

import styles from './Article.module.css';
import aricleData from './ArticleData.json';

const Article = () => {
  return (
    <div className="w-3/5">
      {aricleData.data.map((item: any) => (
        <div key={item.id} className="mb-16">
          <div className="flex items-center justify-between">
            <div className={styles.textWrapper}>
              {/* User */}
              <div className="inline-flex">
                <Link href="/">
                  <a className="flex items-center mb-2">
                    <Image
                      className="rounded-full"
                      src={item.userImg}
                      alt="Picture of the author"
                      width="24px"
                      height="24px"
                      objectFit="cover"
                    />
                    <div className="ml-3 text-sm">{item.userName}</div>
                  </a>
                </Link>
              </div>

              {/* Atricle */}
              <div className="inline-flex">
                <Link href="/">
                  <a>
                    <div className="text-xl font-bold">{item.title}</div>
                    <div className={'mt-1 mb-3 text-sm text-slate-500'}>
                      {item.description.length > 200
                        ? item.description.slice(0, 200) + '...'
                        : item.description}
                    </div>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-5">{item.readingTime}</div>
                <div className="inline-flex">
                  <Link href="/">
                    <a className="bg-slate-200 py-1 px-2 rounded-3xl text-sm ">
                      {item.tags}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article Picture */}
            <div className={styles.picture}>
              <Image
                src={item.img}
                alt="Picture of the author"
                width={350}
                height={150}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
