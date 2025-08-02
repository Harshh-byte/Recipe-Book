import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-7xl font-extrabold text-[#3ABAB4] drop-shadow mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#3ABAB4] text-gray-900 font-semibold rounded hover:bg-[#319e9a] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;