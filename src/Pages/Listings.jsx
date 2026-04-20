import { useEffect, useState} from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

function Listings() {
  const [filters, setFilters] = useState({
    search: "",
    sleep: "all",
    smoking: "any",
    maxBudget: "",
    sort: "none",
  });



  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/users")
    .then(res => setData(res.data));
  }, []);



  // 🔍 FILTERING (ONLY USER CONTROLS)
  const filteredData = data.filter((person) => {
    const searchMatch = person.area
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const sleepMatch =
      filters.sleep === "all" || person.sleep === filters.sleep;

    const smokingMatch =
      filters.smoking === "any" ||
      person.smoking === (filters.smoking === "yes");

    const budgetMatch =
      !filters.maxBudget || person.budget <= Number(filters.maxBudget);

    return searchMatch && sleepMatch && smokingMatch && budgetMatch;
  });

  // 🔥 SORTING (SAFE COPY)
  const sortedData = [...filteredData];

  if (filters.sort === "low") {
    sortedData.sort((a, b) => a.budget - b.budget);
  }

  if (filters.sort === "high") {
    sortedData.sort((a, b) => b.budget - a.budget);
  }

  // 🔄 RESET FILTERS
  const resetFilters = () => {
    setFilters({
      search: "",
      sleep: "all",
      smoking: "any",
      maxBudget: "",
      sort: "none",
    });
  };

  return (
    <div className="page">
      <h1>Available Flatmates</h1>

      {/* 🔧 FILTER PANEL */}
      <div className="filters">

        <input
          type="text"
          placeholder="Search by area..."
          value={filters.search}
          onChange={(e) =>
            setFilters({ ...filters, search: e.target.value })
          }
        />

        <select
          value={filters.sleep}
          onChange={(e) =>
            setFilters({ ...filters, sleep: e.target.value })
          }
        >
          <option value="all">All Sleep Types</option>
          <option value="early">Early Sleepers</option>
          <option value="late">lates</option>
        </select>

        <select
          value={filters.smoking}
          onChange={(e) =>
            setFilters({ ...filters, smoking: e.target.value })
          }
        >
          <option value="any">Smoking: Any</option>
          <option value="yes">Smokers</option>
          <option value="no">Non-Smokers</option>
        </select>

        <input
          type="number"
          placeholder="Max Budget"
          value={filters.maxBudget}
          onChange={(e) =>
            setFilters({ ...filters, maxBudget: e.target.value })
          }
        />

        <select
          value={filters.sort}
          onChange={(e) =>
            setFilters({ ...filters, sort: e.target.value })
          }
        >
          <option value="none">No Sorting</option>
          <option value="low">Budget: Low → High</option>
          <option value="high">Budget: High → Low</option>
        </select>

        <button onClick={resetFilters}>Reset</button>
      </div>

      {/* 📦 RESULTS */}
      <div className="grid">
        {sortedData.length > 0 ? (
          sortedData.map((person) => (
            <ListingCard key={person._id} person={person} />
          ))
        ) : (
          <p>No matches found 😢</p>
        )}
      </div>
    </div>
  );
}

export default Listings;