const About = () => {
  return (
    <section className="route-enter space-y-6 pb-8">
      <div className="surface-panel rounded-[2rem] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b1714f]">
          About Recipe Book
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-[#552d1c]">
          Built for everyday cooks and creative food lovers.
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#7a5241]">
          Recipe Book is your digital kitchen companion, designed to make recipe
          discovery and creation feel simple, organized, and expressive. From
          quick weekday dishes to celebratory meals, everything lives in one
          visual collection you can actually enjoy browsing.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="surface-panel rounded-3xl p-6">
          <h3 className="text-2xl font-semibold text-[#5f3422]">Our Mission</h3>
          <p className="mt-3 text-[#7f5645]">
            Empower home kitchens with a modern space to preserve ideas, improve
            favorite dishes, and share food stories with confidence.
          </p>
        </article>

        <article className="surface-panel rounded-3xl p-6">
          <h3 className="text-2xl font-semibold text-[#5f3422]">
            What You Can Do
          </h3>
          <ul className="mt-3 space-y-2 text-[#7f5645]">
            <li>Browse diverse recipes from around the world</li>
            <li>Create and save your own culinary creations</li>
            <li>Revisit clear preparation steps any time</li>
            <li>Build a personal cookbook that grows with you</li>
          </ul>
        </article>
      </div>

      <p className="px-2 text-sm text-[#946754]">
        Crafted with React, Tailwind CSS, and a lot of appetite.
      </p>
    </section>
  );
};

export default About;
