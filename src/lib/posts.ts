export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "Welcome to my blog! This is the first post.",
  },
  {
    id: 2,
    slug: "react-router",
    title: "React Router",
    content: "Dynamic routing makes apps feel like real websites.",
  },
  {
    id: 4,
    slug: "what-i-learned-about-react",
    title: "What I have Learned about React",
    content:
      "This is a summary about all the cool things i have learned about react.",
  },
  {
    id: 5,
    slug: "ai-agent-using-MERN-stack",
    title: "AI Assistant using MERN stack",
    content:
      "This post will explain how I am going to build a Retail AI assistant using MERN stack.",
  },
  {
    id: 3,
    slug: "protected-routes-101",
    title: "Admin Only",
    content: "This post is only visible to authenticated users.",
  },
];
