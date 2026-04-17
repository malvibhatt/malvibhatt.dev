import resumePdf from '../assets/Malvi Bhatt.pdf';

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const styles = {
  backdrop: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
  modal: "bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col",
  header: "flex items-center justify-between px-6 py-4 border-b border-white/10",
  title: "text-white font-semibold text-lg tracking-tight",
  downloadBtn: "bg-[#2dd4bf] text-[#0f172a] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#0f9488] hover:text-white transition-all duration-200",
  closeBtn: "text-slate-400 hover:text-white transition-colors duration-200 text-2xl leading-none",
  viewer: "flex-1 overflow-hidden rounded-b-2xl",
};

function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className="text-[#2dd4bf]">Malvi Bhatt</span> · Resume
          </h2>
          <div className="flex items-center gap-3">
            <a href={resumePdf} download="Malvi Bhatt.pdf" className={styles.downloadBtn}>
              Download
            </a>
            <button onClick={onClose} className={styles.closeBtn} aria-label="Close modal">
              &times;
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className={styles.viewer}>
          <iframe
            src={resumePdf}
            title="Malvi Bhatt Resume"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}

export default ResumeModal;
