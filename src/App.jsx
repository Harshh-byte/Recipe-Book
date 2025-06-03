import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4 md:px-[15%] py-10 shadow-lg overflow-x-auto">
      <div className="max-w-5xl mx-auto rounded-xl bg-gray-800/80 shadow-2xl p-8 w-full">
        <Navbar />
        <MainRoutes />
      </div>
    </div>
  )
}

export default App