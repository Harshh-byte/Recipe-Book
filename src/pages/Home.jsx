import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900">
            <h1 className="text-5xl font-extrabold mb-2 text-[#3ABAB4] drop-shadow-lg">Welcome to Recipe Book!</h1>
            <h2 className="text-xl text-gray-300 mb-6 font-mono">Your digital kitchen for inspiration and sharing</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Discover, create, and share your favorite recipes from around the world. Whether you're a home cook or a professional chef, Recipe Book is your place to explore new cuisines, save your creations, and inspire others.
            </p>
            <div className="flex gap-4 mb-10">
                <Link
                    to="/recipes"
                    className="px-6 py-2 bg-[#3ABAB4] text-gray-900 rounded font-semibold shadow hover:bg-[#319e9a] transition"
                >
                    Browse Recipes
                </Link>
                <Link
                    to="/create-recipe"
                    className="px-6 py-2 bg-gray-900 text-white rounded font-semibold shadow hover:bg-gray-800 transition"
                >
                    Create Recipe
                </Link>
            </div>
            {/* How it works section */}
            <div className="flex flex-col md:flex-row gap-8 mb-10 w-full overflow-x-auto">
                <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1">
                    <span className="text-3xl mb-2 block">🔎</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Browse</h3>
                    <p className="text-gray-300">Explore a world of recipes by cuisine, chef, or ingredient.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1">
                    <span className="text-3xl mb-2 block">✍️</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Create</h3>
                    <p className="text-gray-300">Add your own recipes and keep your favorites organized.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1">
                    <span className="text-3xl mb-2 block">🌟</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Share</h3>
                    <p className="text-gray-300">Inspire others by sharing your culinary creations.</p>
                </div>
            </div>
            {/* Featured image */}
            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Delicious food"
                className="mt-6 rounded-lg shadow-lg w-full max-w-lg object-cover"
            />
        </div>
    );
};

export default Home;