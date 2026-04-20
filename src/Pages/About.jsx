import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        
        <section className="about-hero">
          <h1>About FlatFinder</h1>
          <p>
            A simple platform built to make finding flats and roommates easier,
            faster, and smarter.
          </p>
        </section>

        <section className="about-grid">
          
          <div className="about-card">
            <h2> Our Mission</h2>
            <p>
              We simplify home hunting by connecting people with verified listings
              and compatible flatmates — all in one place.
            </p>
          </div>

          <div className="about-card">
            <h2> How It Works</h2>
            <ul>
              <li>Browse available flats</li>
              <li>Filter by location and budget</li>
              <li>Connect with owners or flatmates</li>
            </ul>
          </div>

          <div className="about-card highlight">
            <h2> Why This Project?</h2>
            <p>
              Built as part of a full-stack journey using React and Node.js,
              solving a real-world problem students face daily.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default About;