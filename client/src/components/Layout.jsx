import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new-item">Create New Item</NavLink>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;