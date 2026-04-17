import { SiAngular, SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss, SiTailwindcss } from 'react-icons/si';
import type { IconType } from 'react-icons';

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: 'Angular',    icon: SiAngular,      color: '#dd0031' },
  { name: 'TypeScript', icon: SiTypescript,   color: '#3178c6' },
  { name: 'JavaScript', icon: SiJavascript,   color: '#f7df1e' },
  { name: 'React',      icon: SiReact,        color: '#61dafb' },
  { name: 'Node.js',    icon: SiNodedotjs,    color: '#3c873a' },
  { name: 'MongoDB',    icon: SiMongodb,      color: '#47a248' },
  { name: 'HTML',       icon: SiHtml5,        color: '#e34f26' },
  { name: 'CSS',        icon: SiCss,          color: '#1572b6' },
  { name: 'Tailwind',   icon: SiTailwindcss,  color: '#06b6d4' },
];

const styles = {
  section: "bg-[#f8f5f0] py-24 px-6",
  inner: "max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start",
  label: "text-[#2dd4bf] text-sm font-semibold tracking-widest uppercase mb-3",
  heading: "text-4xl font-extrabold text-[#0f172a] mb-6 leading-tight",
  bio: "text-slate-600 text-lg leading-relaxed mb-4",
  statsRow: "flex gap-8 mt-8",
  statNumber: "text-4xl font-extrabold text-[#0f172a]",
  statLabel: "text-slate-500 text-sm mt-1",
  skillsHeading: "text-2xl font-bold text-[#0f172a] mb-6",
  skillsGrid: "grid grid-cols-3 gap-5",
  skillCard: "flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default",
  skillName: "text-slate-700 text-sm font-semibold text-center",
};

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        {/* Left: Bio */}
        <div>
          <p className={styles.label}>About Me</p>
          <h2 className={styles.heading}>
            Crafting scalable UIs<br />for over 9 years
          </h2>
          <p className={styles.bio}>
            I'm a Software Engineer based in Ottawa, Ontario, with deep expertise in
            frontend architecture. My core focus has been the Angular ecosystem- building
            design systems, reusable component libraries, and micro frontend platforms that
            scale across large teams.
          </p>
          <p className={styles.bio}>
            I've delivered across sectors: Mobility & EV infrastructure at Siemens,
            Food & Hospitality tech, Industrial IoT, HealthTech, and full-stack SaaS platforms.
            I care deeply about code quality, performance, and building products that are
            both powerful and maintainable.
          </p>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div>
              <p className={styles.statNumber}>9+</p>
              <p className={styles.statLabel}>Years of experience</p>
            </div>
            <div className="w-px bg-slate-200" />
            <div>
              <p className={styles.statNumber}>5</p>
              <p className={styles.statLabel}>Companies</p>
            </div>
            <div className="w-px bg-slate-200" />
            <div>
              <p className={styles.statNumber}>10+</p>
              <p className={styles.statLabel}>Projects delivered</p>
            </div>
          </div>
        </div>

        {/* Right: Skills */}
        <div>
          <p className={styles.skillsHeading}>Core Skills</p>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <skill.icon size={44} color={skill.color} />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-5 italic">More skills coming soon...</p>
        </div>

      </div>
    </section>
  );
}

export default About;
