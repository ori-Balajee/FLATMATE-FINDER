import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <section className="hero">
        <h1 className="title">Flatmate Matcher</h1>
        <p className="subtitle">
          Find your ideal roommate based on lifestyle, habits, and budget.
        </p>

        <button className="btn-primary" onClick={() => navigate("/listings")}>
          Find Flatmates
        </button>
      </section>

      <section className="features">
        <div className="card">
          <h3>Smart Search</h3>
          <p>Filter by location, budget, and preferences.</p>
        </div>

        <div className="card">
          <h3>Compatibility</h3>
          <p>Match sleep, smoking, and lifestyle habits.</p>
        </div>

        <div className="card">
          <h3>Fast Results</h3>
          <p>Real-time filtering with instant updates.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;