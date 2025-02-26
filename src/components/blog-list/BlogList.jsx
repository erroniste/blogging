import { useState } from "react";
import "./blog-list.css";
import axios from "axios";

const BlogList = () => {
  return (
    <div className="blog-list">
      <h2>Latest Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-card-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-card-content">
              <span className="post-card-tag">Technology</span>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="post-card-footer">
                <div className="post-card-author">
                  <div className="author-avatar">
                    <img 
                      src={`https://i.pravatar.cc/150?img=${post.userId}`} 
                      alt="Author avatar" 
                    />
                  </div>
                  <span>Author {post.userId}</span>
                </div>
                <span className="read-more">
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const posts = [
  {
    userId: 1,
    id: 1,
    title: "How to Make Better Design Decisions",
    body: "Learn the fundamental principles of making informed design decisions. We'll explore key concepts that help create more effective and user-friendly interfaces.",
    image: "https://picsum.photos/seed/post1/400/250"
  },
  {
    userId: 1,
    id: 2,
    title: "Understanding Modern Web Development",
    body: "Discover the essential concepts and tools used in modern web development. From React to Next.js, we cover everything you need to know.",
    image: "https://picsum.photos/seed/post2/400/250"
  },
  {
    userId: 1,
    id: 3,
    title: "Best Practices for React Components",
    body: "Explore proven techniques and patterns for building maintainable and efficient React components. Learn from real-world examples.",
    image: "https://picsum.photos/seed/post3/400/250"
  },
  {
    userId: 1,
    id: 4,
    title: "CSS Grid: A Complete Guide",
    body: "Master CSS Grid layout with this comprehensive guide. Learn how to create responsive and complex layouts with ease.",
    image: "https://picsum.photos/seed/post4/400/250"
  },
  {
    userId: 1,
    id: 5,
    title: "JavaScript Tips and Tricks",
    body: "Improve your JavaScript skills with these essential tips and tricks. Learn advanced techniques used by professional developers.",
    image: "https://picsum.photos/seed/post5/400/250"
  },
  
];

export default BlogList;
