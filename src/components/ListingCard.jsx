function ListingCard({ person }) {
  if (!person) return null;

  return (
    <div className="card">
      <h3>{person.name || "Unknown"}</h3>
      <p>Area: {person.area || "N/A"}</p>
      <p>Budget: ₹{person.budget || 0}</p>
      <p>Sleep: {person.sleep || "N/A"}</p>
      <p>Smoking: {person.smoking ? "Yes" : "No"}</p>
    </div>
  );
}

export default ListingCard;