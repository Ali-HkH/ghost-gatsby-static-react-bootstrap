import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="container footer pt-4 pb-5">
        <div className="footer-left">
          <p>
            <span className="footer-logo">Ghost & Gatsby</span> © 2021 —
            Published with <span className="footer-logo">Ghost</span>
          </p>
        </div>
        <div className="footer-right">
          <ul className="nav-buttons">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tag">Tag</Link>
            </li>
            <li>
              <Link to="/author">Author</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
