// src/components/RecipeCard.tsx

import React from "react";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ meal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          {meal.strCategory}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {meal.strMeal}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>30 min</span>
          </div>

          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{meal.strArea}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
