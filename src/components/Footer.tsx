const styles = {
  footer: "bg-[#0f172a] border-t border-white/10 py-10",
  inner: "max-w-6xl mx-auto px-6 flex flex-col items-center gap-5",
  iconLink: "text-slate-500 hover:text-[#2dd4bf] transition-colors duration-200",
  copyright: "text-slate-600 text-sm",
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className="text-white font-bold text-lg tracking-tight">
          Malvi<span className="text-[#2dd4bf]">.</span>
        </span>

        {/* Social icons */}
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/malvi-bhatt/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.863-3.059-1.865 0-2.151 1.456-2.151 2.961v5.702h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.609v5.587z"/>
            </svg>
          </a>

          {/* GitHub */}
          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a> */}
        </div>

        <p className={styles.copyright}>© {new Date().getFullYear()} Malvi Bhatt. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
