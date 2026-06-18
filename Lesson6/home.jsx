import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Universities App</h1>

      <input
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={() => navigate(`/universities/${country}`)}>
        Search
      </button>
    </div>
  );
}
