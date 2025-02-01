
# Recipe Finder Application

A Recipe Finder application built using **React, Tailwind CSS, and TypeScript**. Users can browse recipes, view details, search for specific recipes, and explore an intuitive UI.

## 🚀 Features

-   **Home Page**: Displays a list of all recipes with images and tags.
    
-   **Recipe Detail Page**: Shows full details of a selected recipe (name, description, tags, ingredients, instructions, and image).
    
-   **Search Functionality**: Users can search for recipes by name.

-   **Pagination**: Implemented pagination for better navigation of recipes.
    
-   **Responsive Design**: Optimized for both desktop and mobile.
    
-   **Loading & Error Handling**: Provides smooth user experience while fetching data.
    
-   **Dark Mode**: Users can toggle between light and dark modes.
    
-   **Favorites**: Users can bookmark their favorite recipes locally.
    

## 📌 Tech Stack

-   **Frontend**: React, TypeScript, Tailwind CSS
    
-   **State Management**: React Query (for API calls)
    
-   **API**: [DummyJSON Recipes API](https://dummyjson.com/recipes)
    

## 📂 Project Structure

```
📦 recipe-finder-app
├── 📁 src
│   ├── 📁 components    # Reusable components (RecipeCard, Navbar, etc.)
│   ├── 📁 pages         # Home, RecipeDetails, Search
│   ├── 📁 api          # API functions (fetching recipes)
│   ├── 📁 context     
│   ├── 📁 types    
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Entry point
│   ├── routes.tsx     # Routes configuration
├── 📄 package.json     # Project dependencies
├── 📄 tailwind.config.js # Tailwind CSS configuration
├── 📄 tsconfig.json    # TypeScript configuration
├── 📄 README.md        # Project documentation
```

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```
git clonehttps://github.com/kamal9580/Recipe-finder-application.git
```

### 2️⃣ Install Dependencies

```
npm install  # or yarn install
```

### 3️⃣ Start the Development Server

```
npm run dev  # or yarn dev
```

### 4️⃣ Build for Production

```
npm run build
```

## 🔗 API Endpoints Used

-   **Get all recipes**: `GET https://dummyjson.com/recipes`
    
-   **Get recipe by ID**: `GET https://dummyjson.com/recipes/{id}`
    
-   **Search recipes**: `GET https://dummyjson.com/recipes/search?q={query}`
    
