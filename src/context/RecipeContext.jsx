import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const defaultRecipes = [
      {
        id: 1,
        title: "Paneer Butter Masala",
        chef: "Chef Arjun",
        cuisine: "Indian",
        description:
          "A creamy and rich North Indian curry made with paneer and tomato gravy.",
        ingredients:
          "Paneer, Tomatoes, Onions, Butter, Garam Masala, Chili Powder, Cream",
        preparation:
          "Sauté onions and tomatoes, then blend into a puree. Cook with butter and spices. Add paneer cubes and cream. Simmer for 10 minutes.",
        image:
          "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Spaghetti Aglio e Olio",
        chef: "Chef Marco",
        cuisine: "Italian",
        description:
          "A simple Italian pasta with garlic, olive oil, and chili flakes.",
        ingredients:
          "Spaghetti, Garlic, Olive Oil, Chili Flakes, Parsley, Salt",
        preparation:
          "Boil spaghetti until al dente. Fry garlic in olive oil, add chili flakes. Toss pasta and garnish with parsley.",
        image:
          "https://images.unsplash.com/photo-1574636573716-062c8c8c6179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BoYWdoZXR0aXxlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 3,
        title: "Vegetable Fried Rice",
        chef: "Chef Li Wei",
        cuisine: "Chinese",
        description:
          "A quick stir-fried rice with fresh vegetables and soy sauce.",
        ingredients:
          "Cooked Rice, Mixed Vegetables, Soy Sauce, Spring Onions, Sesame Oil",
        preparation:
          "Stir-fry vegetables in sesame oil. Add cooked rice and soy sauce. Mix well and garnish with spring onions.",
        image:
          "https://images.unsplash.com/photo-1581184953987-5668072c8420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fHww",
      },
      {
        id: 4,
        title: "Tacos",
        chef: "Chef Isabella",
        cuisine: "Mexican",
        description:
          "Crispy taco shells filled with beans, lettuce, cheese, and salsa.",
        ingredients: "Taco Shells, Beans, Lettuce, Cheese, Salsa, Sour Cream",
        preparation:
          "Fill taco shells with beans, lettuce, and cheese. Top with salsa and sour cream. Serve immediately.",
        image:
          "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3N8ZW58MHx8MHx8fDI%3D",
      },
      {
        id: 5,
        title: "Greek Salad",
        chef: "Chef Nikos",
        cuisine: "Greek",
        description:
          "A refreshing salad with cucumber, tomatoes, olives, and feta cheese.",
        ingredients:
          "Cucumber, Tomatoes, Red Onion, Olives, Feta Cheese, Olive Oil",
        preparation:
          "Chop vegetables and mix with olives. Add crumbled feta and drizzle with olive oil dressing.",
        image:
          "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 6,
        title: "Shakshuka",
        chef: "Chef Layla",
        cuisine: "Middle Eastern",
        description: "Eggs poached in a spicy tomato and bell pepper sauce.",
        ingredients:
          "Eggs, Tomatoes, Bell Peppers, Onions, Garlic, Paprika, Cumin",
        preparation:
          "Cook onions, peppers, and tomatoes with spices. Crack eggs into sauce. Cover and cook until eggs are set.",
        image:
          "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hha3NodWthfGVufDB8fDB8fHww",
      },
      {
        id: 7,
        title: "Sushi Rolls",
        chef: "Chef Haruto",
        cuisine: "Japanese",
        description: "Classic sushi rolls filled with cucumber and avocado.",
        ingredients: "Sushi Rice, Nori Sheets, Cucumber, Avocado, Soy Sauce",
        preparation:
          "Spread sushi rice on nori. Place cucumber and avocado inside. Roll tightly and slice into bite-sized pieces.",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VzaGklMjBSb2xsc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 8,
        title: "Falafel Wrap",
        chef: "Chef Ahmed",
        cuisine: "Middle Eastern",
        description:
          "Crispy falafel wrapped in pita with fresh vegetables and tahini sauce.",
        ingredients:
          "Falafel, Pita Bread, Lettuce, Tomato, Cucumber, Tahini Sauce",
        preparation:
          "Place falafel in pita bread. Add lettuce, tomato, and cucumber. Drizzle with tahini sauce and wrap.",
        image:
          "https://images.unsplash.com/photo-1649138783888-0ec9c3ec2f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsYWZlbCUyMHdyYXB8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 9,
        title: "Butter Croissant",
        chef: "Chef Pierre",
        cuisine: "French",
        description: "Flaky, buttery croissants made with laminated dough.",
        ingredients: "Flour, Butter, Yeast, Sugar, Milk, Salt",
        preparation:
          "Prepare laminated dough with butter layers. Roll into croissant shapes and bake until golden brown.",
        image:
          "https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb2lzc2FudHxlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 10,
        title: "Churros",
        chef: "Chef Sofia",
        cuisine: "Spanish",
        description: "Crispy fried dough pastries rolled in cinnamon sugar.",
        ingredients: "Flour, Butter, Eggs, Sugar, Cinnamon, Oil",
        preparation:
          "Make dough with flour, butter, and eggs. Pipe into hot oil and fry until golden. Roll in cinnamon sugar.",
        image:
          "https://images.unsplash.com/photo-1624371414348-b246eff23427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2h1cnJvc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 11,
        title: "Egg Toast",
        chef: "Chef Mia",
        cuisine: "American",
        description: "Quick breakfast toast with fried egg.",
        ingredients: "Bread, Egg, Butter, Salt, Pepper",
        preparation: "Toast bread, fry egg, place on toast, season and serve.",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnJTIwdG9hc3R8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 12,
        title: "Fruit Salad",
        chef: "Chef Alex",
        cuisine: "Global",
        description: "Fresh mixed fruit salad.",
        ingredients: "Apple, Banana, Orange, Grapes, Honey",
        preparation: "Chop fruits, mix, drizzle with honey, serve chilled.",
        image:
          "https://plus.unsplash.com/premium_photo-1664478279991-832059d65835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 13,
        title: "Veggie Wrap",
        chef: "Chef Sam",
        cuisine: "Fusion",
        description: "Healthy wrap with fresh veggies.",
        ingredients: "Tortilla, Lettuce, Tomato, Cucumber, Cheese",
        preparation: "Fill tortilla with veggies and cheese, wrap and serve.",
        image:
          "https://images.unsplash.com/photo-1585238342107-49a3cdace47f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZ2llJTIwd3JhcHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 14,
        title: "Chicken Rice Bowl",
        chef: "Chef Lee",
        cuisine: "Asian",
        description: "Simple rice bowl with grilled chicken.",
        ingredients: "Rice, Chicken, Soy Sauce, Green Onion",
        preparation: "Grill chicken, slice, serve over rice with sauce.",
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMHJpY2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 15,
        title: "Tomato Soup",
        chef: "Chef Nina",
        cuisine: "European",
        description: "Classic creamy tomato soup.",
        ingredients: "Tomatoes, Onion, Garlic, Cream, Salt",
        preparation: "Cook tomatoes, onion, garlic, blend, add cream, serve.",
        image:
          "https://images.unsplash.com/photo-1659480150417-25f9f0d5ca2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9tYXRvJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 16,
        title: "Banana Pancakes",
        chef: "Chef Priya",
        cuisine: "American",
        description: "Fluffy pancakes with banana.",
        ingredients: "Banana, Flour, Egg, Milk, Sugar",
        preparation: "Mix ingredients, cook pancakes, serve with syrup.",
        image:
          "https://plus.unsplash.com/premium_photo-1692193554212-6a27903ab9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hJTIwcGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 17,
        title: "Grilled Cheese",
        chef: "Chef Ben",
        cuisine: "American",
        description: "Classic grilled cheese sandwich.",
        ingredients: "Bread, Cheese, Butter",
        preparation: "Butter bread, add cheese, grill until golden.",
        image:
          "https://plus.unsplash.com/premium_photo-1739906393226-9978e7943b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 18,
        title: "Corn Salad",
        chef: "Chef Ana",
        cuisine: "Mexican",
        description: "Fresh salad with corn and veggies.",
        ingredients: "Corn, Tomato, Onion, Cilantro, Lime",
        preparation: "Mix all ingredients, season, serve chilled.",
        image:
          "https://plus.unsplash.com/premium_photo-1680118540055-aa9f6ce1d93d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ybiUyMHNhbGFkfGVufDB8fDB8fHww",
      },
      {
        id: 19,
        title: "Oats Bowl",
        chef: "Chef Sara",
        cuisine: "Healthy",
        description: "Simple oats breakfast bowl.",
        ingredients: "Oats, Milk, Banana, Honey",
        preparation: "Cook oats with milk, top with banana and honey.",
        image:
          "https://images.unsplash.com/photo-1585849540407-2ddb0ecaf8ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2F0cyUyMGJvd2x8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 20,
        title: "Peanut Butter Toast",
        chef: "Chef Max",
        cuisine: "American",
        description: "Quick toast with peanut butter.",
        ingredients: "Bread, Peanut Butter, Banana",
        preparation: "Toast bread, spread peanut butter, top with banana.",
        image:
          "https://plus.unsplash.com/premium_photo-1692912808105-bfb0081f0bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVhbnV0JTIwYnV0dGVyJTIwdG9hc3R8ZW58MHx8MHx8fDA%3D",
      },
    ];

    const mergedRecipes = [
      ...defaultRecipes,
      ...storedRecipes.filter(
        (userRecipe) =>
          !defaultRecipes.some(
            (def) => String(def.id) === String(userRecipe.id)
          )
      ),
    ];

    localStorage.setItem("recipes", JSON.stringify(mergedRecipes));
    setRecipes(mergedRecipes);
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
