// components/CourseCard.tsx
import Image from 'next/image';

interface CourseCardProps {
  imageSrc: string;
  title: string;
  instructor: string;
  rating: number;
  duration: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  title,
  instructor,
  rating,
  duration,
}) => (
  <div className="flex flex-col gap-[11px] w-[450px]">
    <Image
      src={imageSrc}
      width={400}
      height={400}
      alt="course"
      className="w-[450px] h-[155px] rounded-lg object-cover"
    />
    <p className="w-[400px] text-black font-semibold text-[12px]">
      {title}
    </p>

    <div className="flex flex-row justify-between">
      <p className="text-black font-normal text-[12px]">
        by <span className="text-black font-semibold">{instructor}</span>
      </p>
      <div className="flex flex-row gap-5">
        <div className="items-center flex flex-row gap-1">
          <Image
            src="/streak.png"
            width={15}
            height={15}
            alt="rating"
            className="w-[15px] h-[15px]"
          />
          <p className="text-black font-normal text-[12px]">{rating}</p>
        </div>
        <div className="items-center flex flex-row">
          <Image
            src="/time.png"
            width={24}
            height={15}
            alt="time"
            className="w-[24px] h-[15px]"
          />
          <p className="text-black font-normal text-[12px]">{duration}</p>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCard;
