import { Outlet, NavLink } from "react-router-dom";
import { routes } from "../routes";
import "../styles/style.css";

export default function Root() {
  return (
    <div className="contaner">
      <header className="header">
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
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
