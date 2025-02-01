import React from 'react';
import { useParams, Link } from 'react-router-dom';


import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { LoadingSpinner } from '../componenets/LoadingSpinner';


export const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: recipe, isLoading } = useQuery(
    ['recipe', id],
    () => api.getRecipeById(Number(id))
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!recipe) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Recipes
      </Link>
      
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{recipe.name}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-xl">★ {recipe.rating.toFixed(1)}</span>
            <span className="text-gray-600 dark:text-gray-300">({recipe.reviewCount} reviews)</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="text-sm text-gray-500 dark:text-gray-400">Prep Time</div>
              <div className="font-semibold">{recipe.prepTimeMinutes} mins</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="text-sm text-gray-500 dark:text-gray-400">Cook Time</div>
              <div className="font-semibold">{recipe.cookTimeMinutes} mins</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="text-sm text-gray-500 dark:text-gray-400">Servings</div>
              <div className="font-semibold">{recipe.servings}</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="text-sm text-gray-500 dark:text-gray-400">Calories</div>
              <div className="font-semibold">{recipe.caloriesPerServing}/serving</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};