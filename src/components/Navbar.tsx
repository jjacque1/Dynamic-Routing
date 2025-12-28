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
      <Link to="/" style={{ fontWeight: 700 }}>
        Landing Page
      </Link>

      <nav>
        <NavLink to="/blog">Blog</NavLink>{" "}
        {!isAuthenticated ? (
          <NavLink to="/login">Log In</NavLink>
        ) : (
          <>
            <NavLink to="/admin">Admin</NavLink>{" "}
            <button type="button" onClick={handleLogout}></button>
          </>
        )}
      </nav>
    </header>
  );
}
