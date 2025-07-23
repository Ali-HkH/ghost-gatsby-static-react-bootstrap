import "./Navigation.css"
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation mt-5">
          <div className="left-nav">
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
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <Link to="https://ghost.org/docs/" className="help-btn">Help</Link>
          </div>
        </nav>
  )
}

export default Navigation