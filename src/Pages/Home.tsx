import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { api } from '../services/api';
import { RecipeCard } from '../components/RecipeCard';
import { SearchBar } from '../components/SearchBar';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['recipes', searchQuery, page],
    () => searchQuery 
      ? api.searchRecipes(searchQuery, page, ITEMS_PER_PAGE)
      : api.getAllRecipes(page, ITEMS_PER_PAGE),
    {
      keepPreviousData: true,
      onError: (error) => {
        console.error('Failed to fetch recipes:', error);
      },
    }
  );

  const totalPages = data ? Math.ceil(data.total / ITEMS_PER_PAGE) : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={setSearchQuery} />
      
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      ) : isError ? (
        <div className="text-center text-red-500 dark:text-red-400">
          Error: {(error as Error).message}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {data?.recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage(old => Math.max(old - 1, 1))}
              disabled={page === 1 || isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Previous
            </button>
            
            <span className="text-gray-700 dark:text-gray-300">
              Page {page} of {totalPages}
            </span>
            
            <button
              onClick={() => setPage(old => (data?.total && old * ITEMS_PER_PAGE < data.total ? old + 1 : old))}
              disabled={!data || page * ITEMS_PER_PAGE >= data.total || isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>

          {isFetching && (
            <div className="flex justify-center mt-4">
              <LoadingSpinner />
            </div>
          )}
        </>
      )}
    </div>
  );
};