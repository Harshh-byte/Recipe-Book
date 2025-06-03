const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 px-4">
            <h1 className="text-4xl font-extrabold mb-4 text-[#3ABAB4]">About Recipe Book</h1>
            <p className="text-lg text-gray-200 max-w-2xl mb-6">
                Recipe Book is your digital kitchen companion! Our mission is to help food lovers discover, create, and share amazing recipes from all over the world. Whether you’re a beginner or a seasoned chef, you’ll find inspiration and community here.
            </p>
            <div className="flex flex-col md:flex-row gap-8 mb-10 w-full max-w-3xl">
                <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1">
                    <span className="text-3xl mb-2 block">🌎</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Explore</h3>
                    <p className="text-gray-300">Browse a variety of cuisines and dishes from around the globe.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1">
                    <span className="text-3xl mb-2 block">📝</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Organize</h3>
                    <p className="text-gray-300">Save, organize, and revisit your favorite recipes anytime.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-md flex-1">
                    <span className="text-3xl mb-2 block">👩‍🍳</span>
                    <h3 className="text-xl font-bold text-[#3ABAB4] mb-2">Share</h3>
                    <p className="text-gray-300">Share your own culinary creations and connect with food lovers.</p>
                </div>
            </div>
            <p className="text-gray-400">
                Built with <span className="text-[#3ABAB4] font-semibold">React</span> and a passion for food.
            </p>
        </div>
    );
};

export default About;