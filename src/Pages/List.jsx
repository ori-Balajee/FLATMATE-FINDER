import { useState } from "react";
import "./List.css";

export default function ListYourself() {
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    area: "",
    sleep: "",
    smoking: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "smoking" ? value === "true" : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      budget: Number(formData.budget),
    };

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);

      // ✅ RESET FORM AFTER SUCCESS
      setFormData({
        name: "",
        budget: "",
        area: "",
        sleep: "",
        smoking: "",
      });

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h2>List Yourself</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="budget"
          type="number"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />

        <input
          name="area"
          placeholder="Preferred Area"
          value={formData.area}
          onChange={handleChange}
          required
        />

        <select
          name="sleep"
          value={formData.sleep}
          onChange={handleChange}
          required
        >
          <option value="">Sleep Schedule</option>
          <option value="early">Early Sleeper</option>
          <option value="late">Late Sleeper</option>
        </select>

        <select
          name="smoking"
          value={formData.smoking}
          onChange={handleChange}
          required
        >
          <option value="">Smoking</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}