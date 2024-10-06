import { IconTwitter, IconGitHub, IconGmail } from "./Icons/Icons.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">All Rights Reserved &#169; Taha Zoabi</div>
      <div className="footer-links">
        <a href="https://github.com/TahaZoabi" target="_blank">
          <IconGitHub />
        </a>
        <a href="mailto:zoabi03@gmail.com" aria-label="Gmail">
          <IconGmail />
        </a>
        <a href="https://x.com/dev_range" target="_blank">
          <IconTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
