import Image from 'next/image';

interface ArticleImageProps {
  articleImg: string;
}

const ArticleImage = ({ articleImg }: ArticleImageProps) => {
  return (
    <div className="max-w-[130px] h-[100px] sm:max-w-[150px] sm:h-[100px] md:max-w-[200px] md:h-[130px] flex ml-8">
      <Image
        src={articleImg}
        alt="Picture of the author"
        width={350}
        height={150}
        objectFit="cover"
      />
    </div>
  );
};

export default ArticleImage;
