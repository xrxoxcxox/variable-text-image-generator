import { Outlet, NavLink } from "react-router-dom";
import { routes } from "../routes";
import "../styles/style.css";

export default function Root() {
  return (
    <div className="grid">
      <header className="templates">
        <h1 className="title">Templates</h1>
        <nav>
          <ul className="navigation-list">
            {routes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "navigation-link -active" : "navigation-link"
                  }
                >
                  {route.path}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
