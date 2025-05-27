import { Link } from "react-router-dom";

import { socialLinks } from "../../../shared";

export const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2025 <strong>Maria Krulikovskaya</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link to={link.link} key={link.name} target="_blank">
              <img alt={link.name} src={link.iconUrl} className="w-6 h-6 object-contain" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
