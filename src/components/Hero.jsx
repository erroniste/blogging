import React, { useState } from "react";
import "../hero.css";

const Hero = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: null,
    userId: "67bff17ee9b4f8e0b23eccba", // Example userId (replace with dynamic)
    createdAt: new Date().toISOString(), // Auto-generated timestamp
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageChange = (e) => {
    setPost({ ...post, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting post:", post);
    // You can send this data to your backend using fetch or axios
  };

  return (
    <section className="hero">
      <div className="content">
        <h1>What's on your mind...</h1>
        <form onSubmit={handleSubmit} className="post-form">
          <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="Title" required />
          <textarea name="content" value={post.content} onChange={handleChange} placeholder="Content" required></textarea>
          <div className="upload-button">
            <label htmlFor="image-upload" className="custom-upload">
              Upload Image
            </label>
            <input type="file" id="image-upload" name="image" accept="image/*" onChange={handleImageChange} required />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
