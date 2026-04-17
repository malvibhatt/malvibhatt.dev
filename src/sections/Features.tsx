import { useState } from 'react';

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {direction === 'left'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />}
    </svg>
  );
}

function ScreenshotCarousel({ screenshots, title, disclaimer }: { screenshots: string[]; title: string; disclaimer?: string }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = screenshots.length > 1;

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <div className="mx-8 mb-4">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
        <img
          src={screenshots[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full object-contain max-h-96"
        />
        {hasMultiple && (
          <>
            <button onClick={prev} className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors" aria-label="Previous">
              <ChevronIcon direction="left" />
            </button>
            <button onClick={next} className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors" aria-label="Next">
              <ChevronIcon direction="right" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {screenshots.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`} />
              ))}
            </div>
          </>
        )}
      </div>
      {disclaimer && (
        <p className="text-slate-600 text-xs italic mt-3 text-center">{disclaimer}</p>
      )}
    </div>
  );
}
import { features } from '../data/features';
import type { Feature } from '../data/features';

// Icons (inline SVG to avoid extra deps)
function IconProblem() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function IconChallenge() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function IconSolution() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconImpact() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const styles = {
  section: "bg-[#0f172a] py-24 px-6",
  inner: "max-w-6xl mx-auto",
  label: "text-[#2dd4bf] text-sm font-semibold tracking-widest uppercase mb-3",
  heading: "text-4xl font-extrabold text-white mb-4",
  subheading: "text-slate-400 text-lg mb-16 max-w-2xl",
  card: "bg-[#1e293b] border border-white/10 rounded-3xl overflow-hidden mb-12",
  cardHeader: "px-8 py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4",
  featureTitle: "text-2xl font-bold text-white",
  projectBadge: "text-xs font-semibold bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20 px-3 py-1 rounded-full",
  techRow: "flex flex-wrap gap-2 px-8 py-4 border-b border-white/10",
  techPill: "text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700",
  storyGrid: "grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10",
  storyPanel: "p-8",
  panelLabel: "flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4",
  panelText: "text-slate-400 text-sm leading-relaxed",
  challengeItem: "mb-5 last:mb-0",
  challengeTitle: "text-slate-200 text-sm font-semibold mb-1",
  challengeDesc: "text-slate-500 text-sm leading-relaxed",
  solutionPoint: "flex items-start gap-2 text-slate-400 text-sm leading-relaxed mb-3 last:mb-0",
  solutionDot: "w-1.5 h-1.5 rounded-full bg-[#2dd4bf] flex-shrink-0 mt-1.5",
  impactBar: "mx-8 mb-8 flex items-center gap-3 bg-[#2dd4bf]/5 border border-[#2dd4bf]/20 rounded-2xl px-6 py-4",
  impactLabel: "text-[#2dd4bf] text-sm font-semibold",
};

type TabKey = 'problem' | 'challenges' | 'solution';

function FeatureCard({ feature }: { feature: Feature }) {
  const [activeTab, setActiveTab] = useState<TabKey>('problem');

  const tabs: { key: TabKey; label: string; color: string; icon: React.ReactNode }[] = [
    { key: 'problem',    label: 'The Problem',    color: 'text-rose-400',   icon: <IconProblem /> },
    { key: 'challenges', label: 'The Challenges', color: 'text-amber-400',  icon: <IconChallenge /> },
    { key: 'solution',   label: 'The Solution',   color: 'text-[#2dd4bf]',  icon: <IconSolution /> },
  ];

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.cardHeader}>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-1"> {feature.project}</p>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
        </div>
        <span className={styles.projectBadge}>Case Study</span>
      </div>

      {/* Tech stack */}
      <div className={styles.techRow}>
        {feature.tech.map((t) => (
          <span key={t} className={styles.techPill}>{t}</span>
        ))}
      </div>

      {/* Tab navigation */}
      <div className="flex border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab.key
                ? `${tab.color} border-current`
                : 'text-slate-500 border-transparent hover:text-slate-300'
            }`}
          >
            <span className={activeTab === tab.key ? tab.color : ''}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-8 py-8 min-h-56">
        {activeTab === 'problem' && (
          <div className="max-w-3xl">
            <p className={styles.panelText + " text-base leading-loose"}>{feature.problem}</p>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="grid md:grid-cols-2 gap-6">
            {feature.challenges.map((c, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className={styles.challengeTitle}>{c.title}</p>
                </div>
                <p className={styles.challengeDesc}>{c.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="max-w-3xl">
            <p className={styles.panelText + " text-base leading-loose mb-6"}>{feature.solution}</p>
            <div className="bg-slate-800/50 rounded-2xl p-5 border border-white/5">
              {feature.solutionPoints.map((point, i) => (
                <div key={i} className={styles.solutionPoint}>
                  <span className={styles.solutionDot} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Screenshots */}
      {feature.screenshots && feature.screenshots.length > 0 && (
        <ScreenshotCarousel
          screenshots={feature.screenshots}
          title={feature.title}
          disclaimer={feature.screenshotDisclaimer}
        />
      )}

      {/* Customer impact */}
      {feature.impactUrl && (
        <div className={styles.impactBar}>
          <span className="text-[#2dd4bf]"><IconImpact /></span>
          <div className="flex-1">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-0.5">Customer Impact</p>
            <a
              href={feature.impactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.impactLabel + " hover:underline"}
            >
              {feature.impactLabel}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Feature Highlights</p>
        <h2 className={styles.heading}>Problems solved. Impact delivered.</h2>
        <p className={styles.subheading}>
          A look behind the scenes: the real challenges, the technical decisions, and how they translated into better products for users.
        </p>

        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
