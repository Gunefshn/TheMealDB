import { ChefHatIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="max-w-7xl mx-auto h-24 rounded-md
   flex gap-4 items-center"
    >
      <div
        className="bg-amber-800 text-white
      h-10 p-2 rounded-md mr-2"
      >
        <ChefHatIcon />
      </div>
      <div>
        <h1
          className="text-2xl font-semibold
          text-amber-800"
        >
          RecipeHub
        </h1>
        <p>Discover Delicious recipes from around the world</p>
      </div>
    </nav>
  );
};

export default Navbar;
