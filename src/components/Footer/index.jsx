import { cSocialLink, cDisclaimer, cFooterContainer } from "./index.module.css";

export default () => (
  <footer className={cFooterContainer}>
    <div>
      <a
        href="https://twitter.com/pineviewlabs"
        target="_blank"
        rel="noopener noreferrer"
        className={cSocialLink}
      >
        Twitter
      </a>
      <a
        href="https://github.com/pineviewlabs"
        target="_blank"
        rel="noopener noreferrer"
        className={cSocialLink}
      >
        Github
      </a>
    </div>

    <p className={cDisclaimer}>
      © {new Date().getFullYear()} Middlemarch. All Right Reserved.
    </p>
  </footer>
);
