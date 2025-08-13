import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-x-hidden">
      <div className="mx-auto bg-gray-800/70 shadow-xl p-6 md:p-10">
        <Navbar />
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;