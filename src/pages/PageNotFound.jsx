const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
            <h1 className="text-7xl font-extrabold text-red-400 mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-2 text-white">Page Not Found</h2>
            <p className="mb-6 text-gray-300">
                Oops! The page you are looking for does not exist or has been moved.
            </p>
            <a
                href="/"
                className="px-6 py-2 bg-[#3ABAB4] text-gray-900 rounded font-semibold shadow hover:bg-[#319e9a] transition"
            >
                Go Home
            </a>
        </div>
    );
};

export default PageNotFound;