import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MealCard from "./components/MealCard";

type Meal = {
  idMeal: string;
  strCategory: string;
  strMealThumb: string;
  strMeal: string;
  strArea: string;
};
function App() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const getMeals = () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  };
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="bg-[#FFF0DD]">
      <div className="bg-white mb-8 sticky top-0 z-10">
        <Navbar />
      </div>
      <div
        className="grid gap-5 
      lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
      >
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            category={meal.strCategory}
            imageSrc={meal.strMealThumb}
            mealName={meal.strMeal}
            area={meal.strArea}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
