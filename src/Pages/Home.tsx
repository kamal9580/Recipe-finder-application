

import React, { useState } from 'react';



import { SearchBar } from '../componenets/SearchBar';
import { RecipeCard } from '../componenets/RecipeCard';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';


export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, isError, error } = useQuery(
    ['recipes', searchQuery],
    () => searchQuery ? api.searchRecipes(searchQuery) : api.getAllRecipes(),
    {
      onError: (error : unknown) => {
        console.error('Failed to fetch recipes:', error);
      },
    }
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchQuery} />
      
      {isLoading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : isError ? (
        <div className="text-center text-red-500 dark:text-red-400">
          Error: {(error as Error).message}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};