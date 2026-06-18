import { useState, useEffect } from "react";

const VALID_EMAIL = "digitalAcademy@gmail.com";
const VALID_PASSWORD = "iLoveReact123";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [users, setUsers] = useState([]);

  const [filters, setFilters] = useState({
    name: true,
    email: true,
  });

  // პირველი ჩატვირთვა - 5 user
  useEffect(() => {
    if (loggedIn) {
      fetchUsers(5);
    }
  }, [loggedIn]);

  const fetchUsers = async (count = 1) => {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    setUsers((prev) => [...prev, ...data.results]);
  };

  const handleLogin = () => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button
          onClick={handleLogin}
          disabled={email !== VALID_EMAIL || password !== VALID_PASSWORD}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Main Page</h2>

      {/* ფილტრები */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={filters.name}
            onChange={() => setFilters((f) => ({ ...f, name: !f.name }))}
          />
          Name
        </label>

        <label style={{ marginLeft: 10 }}>
          <input
            type="checkbox"
            checked={filters.email}
            onChange={() => setFilters((f) => ({ ...f, email: !f.email }))}
          />
          Email
        </label>
      </div>

      <button onClick={() => fetchUsers(1)}>Add User</button>

      {/* users list */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              width: 200,
            }}>
            <img src={user.picture.medium} alt="" />

            {filters.name && (
              <p>
                {user.name.first} {user.name.last}
              </p>
            )}

            {filters.email && <p>{user.email}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
