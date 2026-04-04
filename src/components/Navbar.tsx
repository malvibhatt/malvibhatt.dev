const navLinks = ['Home', 'About', 'Projects', 'Contact'];

const styles = {
  nav: "fixed top-0 left-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10",
  inner: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",
  link: "text-slate-300 hover:text-[#2dd4bf] font-medium transition-colors duration-200 text-sm tracking-wide uppercase",
};

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Left: Name */}
        <span className="text-white font-bold text-lg tracking-tight">
          Malvi<span className="text-[#2dd4bf]">.</span>
        </span>

        {/* Right: Nav links */}
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={styles.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
