import { useState } from 'react';
import ResumeModal from '../components/ResumeModal';

const styles = {
  section: "min-h-screen bg-[#0f172a] flex items-center pt-16 relative overflow-hidden",
  inner: "max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 py-24 relative z-10",
  textBlock: "flex-1 text-center md:text-left",
  greeting: "text-[#2dd4bf] text-lg font-medium tracking-widest uppercase mb-3",
  name: "text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4",
  role: "text-2xl md:text-3xl font-light text-slate-400 mb-6",
  bio: "text-slate-400 text-lg leading-relaxed mb-10 max-w-xl",
  btnRow: "flex gap-4 justify-center md:justify-start flex-wrap",
  primaryBtn: "bg-[#2dd4bf] text-[#0f172a] px-7 py-3 rounded-full font-semibold hover:bg-[#0f9488] hover:text-white transition-all duration-200 shadow-lg shadow-teal-500/20",
  secondaryBtn: "border border-slate-600 text-slate-300 px-7 py-3 rounded-full font-medium hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-200",
  photoWrapper: "flex-shrink-0 relative",
  photoRing: "w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[#2dd4bf]/30 to-[#0f172a] flex items-center justify-center ring-2 ring-[#2dd4bf]/40 ring-offset-4 ring-offset-[#0f172a]",
  photoPlaceholder: "w-56 h-56 md:w-64 md:h-64 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 text-sm",
  // Decorative blobs in background
  blob1: "absolute top-20 right-10 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none",
  blob2: "absolute bottom-10 left-0 w-72 h-72 bg-teal-900/30 rounded-full blur-3xl pointer-events-none",
};

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className={styles.section}>
      {/* Background decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.inner}>
        {/* Left: Text content */}
        <div className={styles.textBlock}>
          <p className={styles.greeting}>Hi, I'm</p>
          <h1 className={styles.name}>Malvi Bhatt</h1>
          <h2 className={styles.role}>Software Engineer</h2>
          <p className={styles.bio}>
            9+ years of experience architecting and delivering high-performance,
            scalable web applications. Specialized in Angular ecosystems, micro frontend
            architecture, and design systems.
          </p>

          <div className={styles.btnRow}>
            <button className={styles.primaryBtn} onClick={() => setIsModalOpen(true)}>
              View Resume
            </button>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoRing}>
            <div className={styles.photoPlaceholder}>
              Photo coming soon
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default Hero;
