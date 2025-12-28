import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state ) ?.from?.pathname || "/admin";

  function handleLogin() {
    login();
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2>Login</h2>
      <button type="button" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}
