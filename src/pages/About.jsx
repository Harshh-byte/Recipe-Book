const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-[#3ABAB4] mb-4">About Recipe Book</h1>
      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
        Recipe Book is your digital kitchen companion — a place to discover, create, and share
        culinary inspiration. Whether you’re a home cook experimenting with new ingredients or
        a seasoned chef perfecting your classics, our platform is designed to help you organize
        and showcase your recipes beautifully.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 text-left mt-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-[#3ABAB4] font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-400">
            To empower creators and food lovers by providing a space to document and share recipes with simplicity and style.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-[#3ABAB4] font-semibold mb-2">What You Can Do</h2>
          <ul className="list-disc ml-5 text-gray-400 space-y-1">
            <li>Browse diverse recipes from around the world</li>
            <li>Create and save your own culinary creations</li>
            <li>Share your recipes with others</li>
            <li>Stay inspired in your cooking journey</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-10">
        Built with 💚 using React & Tailwind CSS
      </p>
    </div>
  );
};

export default About;