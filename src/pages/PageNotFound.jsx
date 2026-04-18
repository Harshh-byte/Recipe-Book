import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const PageNotFound = () => {
  return (
    <section className="route-enter pb-8">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="surface-panel mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center rounded-4xl p-8 text-center md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b2724f]">
          Error
        </p>
        <h2 className="mt-3 text-7xl font-bold text-[#5f3323] md:text-8xl">
          404
        </h2>
        <h3 className="mt-4 text-3xl font-semibold text-[#5c311f]">
          Page Not Found
        </h3>
        <p className="mt-3 max-w-md text-[#8b5c48]">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-[#c96843] px-7 py-3 text-sm font-semibold text-white hover:bg-[#a55334]"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
