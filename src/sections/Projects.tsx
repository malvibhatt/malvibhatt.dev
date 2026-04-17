import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { projects, sectors, sectorMeta } from '../data/projects';
import type { Project, Sector } from '../data/projects';

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {direction === 'left'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />}
    </svg>
  );
}

const styles = {
  section: "bg-[#f8f5f0] py-24 px-6",
  inner: "max-w-6xl mx-auto",
  label: "text-[#2dd4bf] text-sm font-semibold tracking-widest uppercase mb-3",
  heading: "text-4xl font-extrabold text-[#0f172a] mb-4",
  subheading: "text-slate-500 text-lg mb-10 max-w-2xl",
  filterRow: "flex flex-wrap gap-3 mb-12",
  grid: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
  card: "bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden",
  screenshotArea: "relative w-full h-48 bg-slate-50 overflow-hidden",
  screenshot: "w-full h-full object-contain",
  carouselBtn: "absolute top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors",
  dotRow: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5",
  dot: "w-1.5 h-1.5 rounded-full transition-colors",
  cardBody: "px-6 pt-5 pb-4 flex-1",
  sectorBadge: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-4",
  projectName: "text-xl font-bold text-[#0f172a] mb-1",
  tagline: "text-slate-400 text-sm mb-3 font-medium",
  description: "text-slate-500 text-sm leading-relaxed",
  cardBottom: "px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3",
  techRow: "flex flex-wrap gap-1.5",
  techPill: "text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full font-medium",
  liveLink: "flex items-center gap-1.5 text-xs font-semibold text-[#2dd4bf] hover:text-[#0f9488] transition-colors flex-shrink-0",
};

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Lightbox({ screenshots, startIndex, name, onClose }: {
  screenshots: string[];
  startIndex: number;
  name: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const hasMultiple = screenshots.length > 1;

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1)), [screenshots.length]);
  const next = useCallback(() => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1)), [screenshots.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <div className="relative flex items-center justify-center max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        {hasMultiple && (
          <button
            onClick={prev}
            className="absolute left-0 -translate-x-12 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Previous"
          >
            <ChevronIcon direction="left" />
          </button>
        )}

        <img
          src={screenshots[current]}
          alt={`${name} screenshot ${current + 1}`}
          className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
        />

        {hasMultiple && (
          <button
            onClick={next}
            className="absolute right-0 translate-x-12 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Next"
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </div>

      {hasMultiple && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
        active
          ? 'bg-[#0f172a] text-white border-[#0f172a]'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700'
      }`}
    >
      {label}
    </button>
  );
}

function ScreenshotCarousel({ screenshots, name, onOpen }: {
  screenshots: string[];
  name: string;
  onOpen: (index: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = screenshots.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));
  };

  return (
    <div className={styles.screenshotArea}>
      <img
        src={screenshots[current]}
        alt={`${name} screenshot ${current + 1}`}
        className={`${styles.screenshot} cursor-zoom-in`}
        onClick={() => onOpen(current)}
      />

      {hasMultiple && (
        <>
          <button onClick={prev} className={`${styles.carouselBtn} left-2`} aria-label="Previous screenshot">
            <ChevronIcon direction="left" />
          </button>
          <button onClick={next} className={`${styles.carouselBtn} right-2`} aria-label="Next screenshot">
            <ChevronIcon direction="right" />
          </button>
          <div className={styles.dotRow}>
            {screenshots.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === current ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const meta = sectorMeta[project.sector];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className={styles.card}>
      {project.screenshots && project.screenshots.length > 0 ? (
        <>
          <ScreenshotCarousel
            screenshots={project.screenshots}
            name={project.name}
            onOpen={(i) => setLightboxIndex(i)}
          />
          {lightboxIndex !== null && (
            <Lightbox
              screenshots={project.screenshots}
              startIndex={lightboxIndex}
              name={project.name}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </>
      ) : (
        <div className="w-full h-48 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">Screenshots coming soon</div>
      )}

      <div className={styles.cardBody}>
        <div className={`${styles.sectorBadge} ${meta.bg} ${meta.color} ${meta.border}`}>
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${meta.dot}`} />
          {project.sector}
        </div>
        <h3 className={styles.projectName}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.techRow}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techPill}>{t}</span>
          ))}
        </div>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
            Live <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Sector>('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.sector === activeFilter);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Projects</p>
        <h2 className={styles.heading}>Work across industries</h2>
        <p className={styles.subheading}>
          A diverse portfolio spanning restaurant tech, IoT, and fleet management, built across different sectors, stacks, and scales.
        </p>

        {/* Sector filters */}
        <div className={styles.filterRow}>
          {sectors.map((sector) => (
            <FilterButton
              key={sector}
              label={sector}
              active={activeFilter === sector}
              onClick={() => setActiveFilter(sector)}
            />
          ))}
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Sector legend */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {(Object.entries(sectorMeta) as [string, typeof sectorMeta[keyof typeof sectorMeta]][]).map(([sector, meta]) => (
            <div key={sector} className={`flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border ${meta.bg} ${meta.color} ${meta.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
