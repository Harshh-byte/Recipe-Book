import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = (props) => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem("recipes")) || [];
        if (!existingData || existingData.length === 0) {
            const defaultRecipes = [
                {
                    id: "1",
                    title: "Spaghetti Aglio e Olio",
                    chef: "Maria Conti",
                    cuisine: "Italian",
                    description: "Classic Neapolitan pasta with just garlic, olive oil, and chili flakes.",
                    ingredients: [
                        "200g spaghetti",
                        "4 garlic cloves, thinly sliced",
                        "3 tbsp olive oil",
                        "1 tsp red chili flakes",
                        "Salt to taste",
                        "Chopped parsley (optional)"
                    ],
                    preparation: [
                        "Boil spaghetti until al dente.",
                        "In a pan, heat oil and fry garlic.",
                        "Add chili flakes, pasta, and salt.",
                        "Toss and garnish with parsley."
                    ],
                    image: "https://images.unsplash.com/photo-1627286400579-027de47e9e73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "2",
                    title: "Paneer Butter Masala",
                    chef: "Arjun Malhotra",
                    cuisine: "Indian",
                    description: "Creamy, buttery tomato gravy with tender paneer cubes.",
                    ingredients: [
                        "200g paneer",
                        "2 tbsp butter",
                        "1 cup tomato puree",
                        "1/2 cup cream",
                        "1 tsp garam masala",
                        "Salt",
                        "Coriander leaves"
                    ],
                    preparation: [
                        "Sauté tomato puree in butter.",
                        "Add cream, spices, and paneer.",
                        "Simmer 10 mins and garnish."
                    ],
                    image: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "3",
                    title: "Vegetable Fried Rice",
                    chef: "Lee Chang",
                    cuisine: "Chinese",
                    description: "A wok-tossed rice with crunchy veggies and soy sauce.",
                    ingredients: [
                        "1 cup cooked rice",
                        "1/2 cup chopped mixed veggies",
                        "1 tbsp soy sauce",
                        "2 garlic cloves",
                        "Salt and pepper"
                    ],
                    preparation: [
                        "Sauté garlic in oil.",
                        "Add vegetables, then rice and sauces.",
                        "Mix well and cook for 2 mins."
                    ],
                    image: "https://images.unsplash.com/photo-1581184953987-5668072c8420?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "4",
                    title: "Chocolate Mug Cake",
                    chef: "Emma Baker",
                    cuisine: "Dessert",
                    description: "Single-serve dessert ready in 2 minutes using your microwave.",
                    ingredients: [
                        "4 tbsp flour",
                        "2 tbsp cocoa powder",
                        "2 tbsp sugar",
                        "1/4 tsp baking powder",
                        "3 tbsp milk",
                        "1 tbsp oil",
                        "Pinch of salt"
                    ],
                    preparation: [
                        "Mix everything in a mug.",
                        "Microwave for 90 seconds.",
                        "Let cool and enjoy."
                    ],
                    image: "https://images.unsplash.com/photo-1511938842055-c59f750525b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "5",
                    title: "Margherita Pizza",
                    chef: "Antonio Rossi",
                    cuisine: "Italian",
                    description: "An Italian favorite topped with tomato sauce, mozzarella, and basil.",
                    ingredients: [
                        "1 pizza base",
                        "1/2 cup tomato sauce",
                        "100g mozzarella cheese",
                        "Fresh basil leaves",
                        "1 tbsp olive oil"
                    ],
                    preparation: [
                        "Spread sauce on base.",
                        "Add mozzarella and basil.",
                        "Drizzle oil and bake at 200°C for 12–15 mins."
                    ],
                    image: "https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "6",
                    title: "Chole Bhature",
                    chef: "Meera Sharma",
                    cuisine: "Indian",
                    description: "Spicy chickpeas served with deep-fried Indian bread.",
                    ingredients: [
                        "1 cup boiled chickpeas",
                        "2 chopped onions",
                        "1 chopped tomato",
                        "1 tsp chole masala",
                        "1 tbsp oil",
                        "Bhature (ready or homemade)"
                    ],
                    preparation: [
                        "Sauté onion and tomato, add spices.",
                        "Add chickpeas and simmer.",
                        "Serve hot with bhature."
                    ],
                    image: "https://cdn.pixabay.com/photo/2022/12/28/17/44/bowl-7683485_1280.jpg"
                },
                {
                    id: "7",
                    title: "Greek Salad",
                    chef: "Nikos Demetriou",
                    cuisine: "Mediterranean",
                    description: "A refreshing mix of tomatoes, cucumber, olives, and feta cheese.",
                    ingredients: [
                        "2 tomatoes, chopped",
                        "1 cucumber, sliced",
                        "1/2 cup black olives",
                        "1/2 cup feta cheese cubes",
                        "1 tbsp olive oil",
                        "Salt and oregano to taste"
                    ],
                    preparation: [
                        "Combine vegetables in a bowl.",
                        "Add feta, olives, olive oil.",
                        "Toss and season with salt and oregano."
                    ],
                    image: "https://cdn.pixabay.com/photo/2014/12/28/13/18/feta-cheese-581848_1280.jpg"
                },
                {
                    id: "8",
                    title: "Sushi Rolls",
                    chef: "Hiro Tanaka",
                    cuisine: "Japanese",
                    description: "Delicate rolls with rice, seaweed, and vegetables or fish.",
                    ingredients: [
                        "1 cup sushi rice",
                        "Nori sheets",
                        "Cucumber, avocado, or salmon",
                        "Rice vinegar",
                        "Soy sauce"
                    ],
                    preparation: [
                        "Cook and season rice.",
                        "Place rice on nori, add fillings.",
                        "Roll tightly and slice."
                    ],
                    image: "https://images.pexels.com/photos/3147493/pexels-photo-3147493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    id: "9",
                    title: "Blueberry Pancakes",
                    chef: "Olivia Moore",
                    cuisine: "American",
                    description: "Fluffy pancakes bursting with fresh blueberries.",
                    ingredients: [
                        "1 cup flour",
                        "1 tbsp sugar",
                        "1 egg",
                        "3/4 cup milk",
                        "1/2 cup blueberries",
                        "Butter for cooking"
                    ],
                    preparation: [
                        "Mix flour, sugar, egg, and milk.",
                        "Fold in blueberries.",
                        "Cook pancakes on greased skillet until golden."
                    ],
                    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
                },
                {
                    id: "10",
                    title: "Hakka Noodles",
                    chef: "Rohan Patel",
                    cuisine: "Chinese",
                    description: "Stir-fried noodles with veggies and soy sauce.",
                    ingredients: [
                        "200g noodles",
                        "1/2 cup bell peppers",
                        "1/4 cup carrots, julienned",
                        "2 tbsp soy sauce",
                        "1 tsp vinegar",
                        "1 tbsp oil"
                    ],
                    preparation: [
                        "Boil and drain noodles.",
                        "Sauté veggies in oil.",
                        "Add noodles and sauces, toss well."
                    ],
                    image: "https://images.unsplash.com/photo-1617622141573-2e00d8818f3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            ];
            localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
            setdata(defaultRecipes);
        } else {
            setdata(existingData);
        }
    }, []);

    return (
        <RecipeContext.Provider value={{ data, setdata }}>
            {props.children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;
