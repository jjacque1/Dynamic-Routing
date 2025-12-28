import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogPost() {
    const { slug } = useParams();

    const post = posts.find((p) => p.slug === slug );

    if(!post) {
        return (
            <div>
                <h2>Post not found</h2>
                <p>No post exists for slug: {slug}</p>
            </div>
        )
    }

    return (
        <div>
            <h2>{ post.title}</h2>
            <p style={{gap: "12px", whiteSpace: "pre-line"}}>{ post.content}</p>
        </div>
    )
}