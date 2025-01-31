import axios from "axios";
import { Recipe, RecipeResponse } from "../types/recipe"


    const API_BASE_URL = 'https://dummyjson.com';
    
 export const api = () => {
      
    getAllRecipes: async (): Promise<RecipeResponse> => {

        const response = await axios.get<RecipeResponse>(`${API_BASE_URL}/recipes`);

        return response.data;

    } 

    //this getAllRecipes is a aync function which rerun a promise of type reciperespnse

    getReceipeById: async (id: number) : Promise<Recipe>  => {

        const response = await axios.get<Recipe>(`${API_BASE_URL}/recipes/${id}`);

        return response.data;

    }

    searchRecipes: async (query: string): Promise<RecipeResponse> => {

        const response = await axios.get<RecipeResponse>(`${API_BASE_URL}/recipes/search?q=${query}`);

        return response.data;

    }

  };
    
   