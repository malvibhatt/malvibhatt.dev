import { useState } from 'react';

// TODO: Replace with your Formspree form ID
// 1. Sign up at formspree.io
// 2. Create a new form → copy the ID (e.g. "xbjvkpqz")
// 3. Paste it below
const FORMSPREE_ID = 'YOUR_FORM_ID';

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const styles = {
  section: "bg-[#0f172a] py-24 px-6",
  inner: "max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start",
  label: "text-[#2dd4bf] text-sm font-semibold tracking-widest uppercase mb-3",
  heading: "text-4xl font-extrabold text-white mb-4 leading-tight",
  subheading: "text-slate-400 text-lg leading-relaxed mb-10",
  infoItem: "flex items-center gap-4 mb-6",
  infoIcon: "w-10 h-10 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center text-[#2dd4bf] flex-shrink-0",
  infoText: "text-slate-300 text-sm",
  infoLabel: "text-slate-500 text-xs uppercase tracking-widest mb-0.5",
  form: "bg-[#1e293b] border border-white/10 rounded-3xl p-8",
  fieldGroup: "mb-5",
  fieldLabel: "block text-slate-400 text-sm font-medium mb-2",
  input: "w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#2dd4bf]/50 focus:ring-1 focus:ring-[#2dd4bf]/30 transition-colors",
  textarea: "w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#2dd4bf]/50 focus:ring-1 focus:ring-[#2dd4bf]/30 transition-colors resize-none",
  submitBtn: "w-full bg-[#2dd4bf] text-[#0f172a] py-3 rounded-full font-semibold hover:bg-[#0f9488] hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
  successMsg: "flex items-center gap-3 bg-green-900/30 border border-green-500/20 text-green-300 text-sm rounded-2xl px-5 py-4 mt-4",
  errorMsg: "flex items-center gap-3 bg-red-900/30 border border-red-500/20 text-red-300 text-sm rounded-2xl px-5 py-4 mt-4",
};

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.863-3.059-1.865 0-2.151 1.456-2.151 2.961v5.702h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.609v5.587z" />
    </svg>
  );
}

function Contact() {
  const [form, setForm] = useState<FormFields>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        {/* Left: Info */}
        <div>
          <p className={styles.label}>Contact</p>
          <h2 className={styles.heading}>Let's work<br />together</h2>
          <p className={styles.subheading}>
            I'm currently open to new opportunities. Feel free to reach out.
          </p>

          <div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><MailIcon /></div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <a href="mailto:malvisbhatt@gmail.com" className={styles.infoText + " hover:text-[#2dd4bf] transition-colors"}>
                  malvisbhatt@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><LocationIcon /></div>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <p className={styles.infoText}>Ottawa, Ontario, Canada</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><LinkedInIcon /></div>
              <div>
                <p className={styles.infoLabel}>LinkedIn</p>
                <a
                  href="https://linkedin.com/in/malvi-bhatt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoText + " hover:text-[#2dd4bf] transition-colors"}
                >
                  linkedin.com/in/malvi-bhatt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className={styles.submitBtn}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className={styles.successMsg}>
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMsg}>
              Something went wrong. Please try emailing directly.
            </div>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;
