import { Stories } from "@/types/stories";
import Image from "next/image";

const UserStories = ({ review }: { review: Stories }) => {
  const { id, header, image, content } = review;
  return (
    <div className={`rounded-3xl p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none`}>
      <Image width={100} height={90} className="" src={image} alt={header} />
      <div className={`flex justify-between dark:border-strokedark`}>
        <div className="p-2">
          <h3 className="text-metatitle3 text-black dark:text-white">
            {header}
          </h3>
          <p className="text-xs">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStories;
