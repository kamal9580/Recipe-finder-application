import axios from 'axios';
import { Recipe, RecipeResponse } from '../types/recipe';

const API_BASE_URL = 'https://dummyjson.com';

export const api = {
  getAllRecipes: async (page: number = 1, limit: number = 10): Promise<RecipeResponse> => {
    const skip = (page - 1) * limit;
    const response = await axios.get<RecipeResponse>(
      `${API_BASE_URL}/recipes?limit=${limit}&skip=${skip}`
    );
    return response.data;
  },

  getRecipeById: async (id: number): Promise<Recipe> => {
    const response = await axios.get<Recipe>(`${API_BASE_URL}/recipes/${id}`);
    return response.data;
  },

  searchRecipes: async (query: string, page: number = 1, limit: number = 10): Promise<RecipeResponse> => {
    const skip = (page - 1) * limit;
    const response = await axios.get<RecipeResponse>(
      `${API_BASE_URL}/recipes/search?q=${query}&limit=${limit}&skip=${skip}`
    );
    return response.data;
  }
};