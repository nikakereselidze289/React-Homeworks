import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Universities() {
  const { country } = useParams();
  const [universities, setUniversities] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, [country]);

  return (
    <div style={{ padding: 20 }}>
      <h2>{country} Universities</h2>

      {universities.map((uni, i) => (
        <div
          key={i}
          style={{
            border: "1px solid gray",
            padding: 10,
            marginBottom: 10,
          }}>
          <h3>{uni.name}</h3>

          <button onClick={() => setSelected(uni)}>Detail</button>
        </div>
      ))}

      {/* MODAL */}
      {selected && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
          }}>
          <div
            style={{
              background: "white",
              padding: 20,
              margin: 100,
            }}>
            <h2>{selected.name}</h2>
            <p>{selected.country}</p>
            <p>{selected.domains?.[0]}</p>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
