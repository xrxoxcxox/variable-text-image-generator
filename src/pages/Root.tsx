import { Outlet, Link } from "react-router-dom";
import "../styles/style.css";

export default function Root() {
  return (
    <div className="grid">
      <header className="templates">
        <h1>Background image generator</h1>
        <nav>
          <ul>
            <li>
              <Link to={`example1`}>Example 1</Link>
            </li>
            <li>
              <Link to={`example2`}>Example 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
