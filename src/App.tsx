import "./index.css";
import pp from "./assets/mimi.jpg"

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">Shrestha Ghosh</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>

      {/* Hero */}
      <main id="home" className="hero">
        <div className="hero-text">
          <p className="tag">Structural Engineer</p>
          <h1>Hello, my name is <br /> Shrestha Gosh</h1>
          <p className="desc">
            Merging vision with structure, building spaces that tell stories of strength and elegance.  

          </p>
          <div className="buttons">
            <a href="#projects" className="btn primary">Projects</a>
            <a href="https://linkedin.com" className="btn secondary">LinkedIn</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="yellow-bg"></div>
          <div className="profile">
            <img
              src={pp}
              alt="Profile"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
