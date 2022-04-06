import Image from 'next/image';

interface IProps {
  height?: number;
  width?: number;
}

const CustomImage = ({ height, width }: IProps) => {
  return (
    <div className="flex justify-center">
      <Image
        className="rounded-full "
        priority
        src="/images/pic01.jpg"
        height={height}
        width={width}
      />
    </div>
  );
};

export default CustomImage;
