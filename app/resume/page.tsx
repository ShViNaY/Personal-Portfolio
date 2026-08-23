"use client";
import { Download } from "lucide-react";
import styles from "./resume.module.css";

const RESUME_PDF = "/resume/Vinay_SH_Resume.pdf";

export default function ResumePage() {
  return (
    <div className="container py-6">
      <div className={`${styles.resumeShell}`}>
        {/* Download button placed top-right on the resume viewer page only */}
        <a
          href={RESUME_PDF}
          download="Vinay_SH_Resume.pdf"
          className={`btn btn-secondary text-sm inline-flex items-center gap-2 ${styles.downloadBtn}`}
          aria-label="Download Resume"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Download</span>
        </a>

        <div className={styles.iframeWrap}>
          <iframe
            src={RESUME_PDF}
            title="Resume"
            className={`${styles.resumeIframe}`}
          />
        </div>
      </div>
    </div>
  );
}
