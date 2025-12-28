import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/blog");
  }

  return (
    <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Link className={"navlink"} to="/" style={{ fontWeight: 700 }}>
        Home
      </Link>

      <nav>
        <NavLink className={"navlink"} to="/blog">Blogs</NavLink>{" "}
        {!isAuthenticated ? (
          <NavLink to="/login">Log In</NavLink>
        ) : (
          <>
            <NavLink to="/admin">Admin</NavLink>{" "}
            <button className={"navlink"} type="button" onClick={handleLogout}>Log out</button>
          </>
        )}
      </nav>
    </header>
  );
}
