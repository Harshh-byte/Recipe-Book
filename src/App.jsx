import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen pb-10 text-[#2f1e17]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#ffc994]/45 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-[#ff9f8a]/35 blur-3xl" />
        <div className="absolute -bottom-16 left-1/4 h-72 w-72 rounded-full bg-[#ffd9a8]/35 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-6 md:px-8 md:pt-10">
        <header className="rounded-[2rem] border border-[#f6d8c2] bg-[#fff9f1]/95 p-4 shadow-[0_24px_60px_rgba(127,66,38,0.15)] md:p-6">
          <div className="mb-5 space-y-3 border-b border-[#f5dfce] pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b0714f]">
                Recipe Book
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-[#5a2d19] md:text-4xl">
                Cook. Keep. Share.
              </h1>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-[#8f5d46]">
              Discover recipes from around the world and curate your personal
              cookbook.
            </p>
          </div>
          <Navbar />
        </header>

        <main className="mt-8 md:mt-10">
          <MainRoutes />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
