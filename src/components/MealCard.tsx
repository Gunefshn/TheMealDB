import { HourglassIcon, UsersIcon } from "lucide-react";

type Props = {
  category: string;
  imageSrc: string;
  mealName: string;
  area: string;
};
const MealCard = ({ category, imageSrc, mealName, area }: Props) => {
  return (
    <div
      className="bg-white mx-auto max-xs
    border-1 rounded-xl border-gray-100 grid gap-2 
    relative shadow-large"
    >
      <img
        className="border-t-1 rounded-t-md border-gray-100"
        src={imageSrc}
        alt="food-image"
      />
      <h2 className="ml-2 font-semibold text-lg text-amber-900">{mealName}</h2>
      <span
        className="absolute top-2 right-2 
      bg-amber-50 p-1 border-1 rounded-2xl 
      border-gray-100 font-semibold text-amber-800"
      >
        {category}
      </span>
      <div className="flex justify-between m-2">
        <div
          className="w-20 flex justify-between 
        items-center text-amber-700"
        >
          <span>
            <HourglassIcon />
          </span>
          <span>30 Min</span>
        </div>
      </div>
      <div
        className="flex justify-between items-center
      m-2 text-amber-700"
      >
        <span>
          <UsersIcon />
        </span>
        <span>{area}</span>
      </div>
    </div>
  );
};

export default MealCard;
