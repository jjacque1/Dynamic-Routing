import { useParams, useNavigate, Navigate } from "react-router-dom";
import { posts } from "../lib/posts";
import { useAuth } from "../context/AuthContext";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <p>No post exists for slug: {slug}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

   if (post.slug === "protected-routes-101" && !isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

  return (
    <div>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}>
        <h2>{post.title}</h2>
        <button className="btn" type="button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>

      <p style={{ gap: "12px", whiteSpace: "pre-line" }}>{post.content}</p>
    </div>
  );
}
