import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { RecipeCard } from '../componenets/RecipeCard';


export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Favorite Recipes
      </h1>
      
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No favorite recipes yet. Start adding some!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};