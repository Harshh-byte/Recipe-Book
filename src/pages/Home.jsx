import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 px-4 py-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3ABAB4] drop-shadow-md mb-2">
                Welcome to Recipe Book!
            </h1>

            <h2 className="text-lg md:text-xl text-gray-300 mb-6 font-mono">
                Your digital kitchen for inspiration & sharing
            </h2>

            <p className="text-base md:text-lg text-gray-200 max-w-2xl mb-8 leading-relaxed">
                Discover, create, and share your favorite recipes from around the world.
                Whether you're a home cook or a pro chef, Recipe Book helps you explore new cuisines,
                save your creations, and inspire others.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                    to="/recipes"
                    className="px-6 py-2 bg-[#3ABAB4] text-gray-900 font-semibold rounded shadow hover:bg-[#319e9a] transition"
                >
                    Browse Recipes
                </Link>
                <Link
                    to="/create-recipe"
                    className="px-6 py-2 bg-gray-900 text-white font-semibold rounded shadow hover:bg-gray-800 transition"
                >
                    Create Recipe
                </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
                <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <span className="text-3xl mb-2 block">🔎</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Browse</h3>
                    <p className="text-gray-300 text-sm">
                        Explore recipes by cuisine, chef, or ingredients.
                    </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <span className="text-3xl mb-2 block">✍️</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Create</h3>
                    <p className="text-gray-300 text-sm">
                        Add your own recipes and organize your digital kitchen.
                    </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <span className="text-3xl mb-2 block">🌟</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Share</h3>
                    <p className="text-gray-300 text-sm">
                        Share culinary creations and inspire fellow food lovers.
                    </p>
                </div>
            </div>

            {/* Featured Image */}
            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Delicious food"
                className="rounded-xl shadow-xl w-full max-w-lg object-cover"
            />
        </div>
    );
};

export default Home;