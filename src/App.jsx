import { useState } from 'react'
import ContactUsForm from './components/ContactUsForm'
import Hero from './components/Hero'
import BlogList from './components/blog-list/BlogList'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App() {


  return (
    <div className="blog-container">
      <Header />
      <main className="blog-content">
       <Hero />
        <BlogList />
      </main>
      <ContactUsForm />
      <Footer />   
    </div>
  )
}

export default App
