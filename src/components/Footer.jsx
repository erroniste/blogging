import '../Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your blog description goes here. Share your story and connect with your audience.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-media">
          <ul>
            <li>
              <a href="https://web.facebook.com/profile.php?id=61571584975161">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/geeks.institute">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/geeksinstitute01">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@geeks.institute">TikTok</a>
            </li>
          </ul>
        </div>

        </div>
        <div className="footer-section subscribe">
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Hackathon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
