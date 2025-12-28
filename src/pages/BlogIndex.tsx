import { Link } from "react-router-dom";
import { posts } from "../lib/posts";
import { useAuth } from "../context/AuthContext";

export default function BlogIndex() {
  const { isAuthenticated } = useAuth();

  const visiblePosts = posts.filter((post) => {
    if (post.slug === "protected-routes-101") {
      return isAuthenticated;
    }

    return true;
  });

  return (
    <div>
      <h2>Blogs</h2>
      <ul className="card">
        {visiblePosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              {post.title} <button className="btn"> View Blog</button>
            </Link>
          </li>
        ))}
      </ul>

      {!isAuthenticated && (
        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
          Log in to see admin-only posts.
        </p>
      )}
    </div>
  );
}
