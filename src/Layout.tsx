import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Heim
          </NavLink>
          <NavLink to="/about">Um okkur</NavLink>
          <NavLink to="/products">Vörur</NavLink>
          <NavLink to="/categories">Flokkar</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
