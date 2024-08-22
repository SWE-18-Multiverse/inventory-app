import { NavLink, Outlet } from "react-router-dom";
import './layout.css';
import Logo from  '../../images/logo.jpg';

function Layout() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} className="logo-img" alt="logo"/>
        <ul className="navbar-list">
          <NavLink to="/" className="home-button">Home</NavLink>
          <NavLink to="/new-item" className="create-button">Create New Item</NavLink>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;