const MultipleValuesCard = () => {
  const data = {
    name: "Dummy Card",
    country: "Wonderland",
    location: "Fantasy City",
    year_built: "1234",
    description: "This is a sample card with dummy data."
  };

  // Destructure
  let { name, country, location, year_built, description } = data;

  return (
    <li style={{ border: "1px solid gray", padding: "6px", margin: "6px", width: "150px", fontSize: "12px", borderRadius: "6px", textAlign: "center" }}>
      {/* Image directly from public folder */}
      <img
        src="/file.jpg" // 👈 Put your image file in public/file.jpg
        alt={name}
        width="80"
        style={{ borderRadius: "6px", marginBottom: "6px" }}
      />
      <p>{name}</p>
      <p>{country}</p>
      <p>{location}</p>
      <p>{year_built}</p>
      <p>{description}</p>
    </li>
  );
};

export default MultipleValuesCard;
