import { Outlet, NavLink } from "react-router-dom";
import "../styles/style.css";

export default function Root() {
  return (
    <div className="grid">
      <header className="templates">
        <h1 className="title">Templates</h1>
        <nav>
          <ul className="navigation-list">
            <li>
              <NavLink
                to={`example1`}
                className={({ isActive }) =>
                  isActive ? "navigation-link -active" : "navigation-link"
                }
              >
                Example 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`example2`}
                className={({ isActive }) =>
                  isActive ? "navigation-link -active" : "navigation-link"
                }
              >
                Example 2
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
