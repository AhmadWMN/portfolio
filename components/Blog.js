import React from "react";
import "../styles/Blog.css";

const Blog = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "January 15, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eros ac turpis bibendum, nec lacinia lectus vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae...",
      author: "John Doe",
      image: "https://example.com/react-hooks.jpg",
      url: "https://example.com/blog/react-hooks",
    },
    {
      id: 2,
      title: "Node.js Best Practices for Scalable Applications",
      date: "February 28, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eros ac turpis bibendum, nec lacinia lectus vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae...",
      author: "Jane Smith",
      image: "https://example.com/nodejs-best-practices.jpg",
      url: "https://example.com/blog/nodejs-best-practices",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>
              <p className="blog-date">{post.date}</p>
              <p>{post.content}</p>
              <p className="blog-author">By {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
