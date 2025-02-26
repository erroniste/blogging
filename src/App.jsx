import { useState } from 'react'
//import Header from './components/Header'
import Hero from './components/Hero'
//import BlogList from './components/BlogList'
//import Footer from './components/Footer'
import './App.css'

function App() {
  // Static blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first component...",
      date: "2024-02-26",
      author: "Mouad",
      category: "Programming"
    },
    {
      id: 2,
      title: "Web Development Best Practices",
      excerpt: "Discover the essential practices for modern web development...",
      date: "2024-02-25",
      author: "Mouad",
      category: "Development"
    },
    {
      id: 3,
      title: "Understanding JavaScript Promises",
      excerpt: "A deep dive into asynchronous programming with JavaScript...",
      date: "2024-02-24",
      author: "Mouad",
      category: "JavaScript"
    }
  ]

  return (
    <div className="blog-container">
      {/* <Header /> */}
      <main className="blog-content">
        <Hero />
        {/* <BlogList posts={blogPosts} /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
