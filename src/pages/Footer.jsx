const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[#f5dfce] pt-8 pb-4 text-center">
      <p className="text-xs text-[#a0724f]">
        © {currentYear} Recipe Book. All rights reserved.
      </p>
      <p className="mt-2 text-xs text-[#b0824f]">Discover • Create • Share</p>
    </footer>
  );
};

export default Footer;
