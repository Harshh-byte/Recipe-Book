import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="route-enter space-y-8 pb-8">
      <div className="surface-panel rounded-4xl p-6 md:p-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#b37350]">
              Home Kitchen Hub
            </p>
            <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#4f2a1b] md:text-5xl">
              Plan your next meal like a creator, not a collector.
            </h2>
            <p className="mb-6 max-w-lg text-[#7a5240]">
              Keep everything from comfort classics to experimental plates in
              one place. Browse inspiration, write your own recipes, and make
              your personal cookbook feel alive.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/recipes"
                className="rounded-full bg-[#c86843] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a95334]"
              >
                Browse Recipes
              </Link>
              <Link
                to="/create-recipe"
                className="rounded-full border border-[#ddb79f] bg-white/80 px-6 py-3 text-sm font-semibold text-[#764634] hover:border-[#c48666]"
              >
                Create Recipe
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Prepared food on a table"
              className="h-82.5 w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#f0d4be] bg-[#fff9f1]/95 px-4 py-3 shadow-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-[#ab6f4f]">
                Featured Mood
              </p>
              <p className="text-sm font-semibold text-[#5d3322]">
                Weekend comfort dinner lineup
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Discover",
            detail:
              "Browse cuisine ideas by mood, chef, or ingredients in seconds.",
          },
          {
            title: "Design",
            detail:
              "Write your own recipes with clear steps that are easy to revisit.",
          },
          {
            title: "Delight",
            detail:
              "Turn saved recipes into a visual cookbook you actually use.",
          },
        ].map((feature) => (
          <article
            key={feature.title}
            className="surface-panel rounded-3xl p-5 hover:-translate-y-1"
          >
            <h3 className="mb-2 text-2xl font-semibold text-[#603524]">
              {feature.title}
            </h3>
            <p className="text-sm text-[#805745]">{feature.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
