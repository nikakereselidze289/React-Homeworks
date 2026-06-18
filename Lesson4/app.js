import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const users = [
    {
      gender: "female",
      name: { first: "Julia", last: "Tervo" },
      email: "julia.tervo@example.com",
      dob: { age: 73 },
      location: { country: "Finland" },
      login: { uuid: "1" },
      picture: {
        large: "",
      },
    },
    {
      gender: "male",
      name: { first: "Radoje", last: "Ristović" },
      email: "radoje.ristovic@example.com",
      dob: { age: 41 },
      location: { country: "Serbia" },
      login: { uuid: "2" },
      picture: {
        large: "",
      },
    },
    {
      gender: "male",
      name: { first: "Carl-Heinz", last: "Hammerschmidt" },
      email: "carl@example.com",
      dob: { age: 53 },
      location: { country: "Germany" },
      login: { uuid: "3" },
      picture: {
        large: "",
      },
    },
    {
      gender: "male",
      name: { first: "Nihal", last: "Koyuncu" },
      email: "nihal@example.com",
      dob: { age: 65 },
      location: { country: "Turkey" },
      login: { uuid: "4" },
      picture: {
        large: "",
      },
    },
    {
      gender: "female",
      name: { first: "Fabiënne", last: "De Beus" },
      email: "fabienne@example.com",
      dob: { age: 66 },
      location: { country: "Netherlands" },
      login: { uuid: "5" },
      picture: {
        large: "",
      },
    },
    {
      gender: "female",
      name: { first: "Estefanía", last: "Prieto" },
      email: "estefania@example.com",
      dob: { age: 27 },
      location: { country: "Mexico" },
      login: { uuid: "6" },
      picture: {
        large: "",
      },
    },
    {
      gender: "female",
      name: { first: "Mila", last: "Wright" },
      email: "mila@example.com",
      dob: { age: 22 },
      location: { country: "New Zealand" },
      login: { uuid: "7" },
      picture: {
        large: "",
      },
    },
    {
      gender: "female",
      name: { first: "Niyash", last: "Mousavi" },
      email: "nyysh@example.com",
      dob: { age: 53 },
      location: { country: "Iran" },
      login: { uuid: "8" },
      picture: {
        large: "",
      },
    },
    {
      gender: "male",
      name: { first: "Vukašin", last: "Rađen" },
      email: "vukasin@example.com",
      dob: { age: 28 },
      location: { country: "Serbia" },
      login: { uuid: "9" },
      picture: {
        large: "",
      },
    },
    {
      gender: "female",
      name: { first: "Maria", last: "Barbier" },
      email: "maria@example.com",
      dob: { age: 39 },
      location: { country: "Switzerland" },
      login: { uuid: "10" },
      picture: {
        large: "",
      },
    },
  ];

  const isValid =
    email === "digitalAcademy@gmail.com" && password === "iLoveReact123";

  // LOGIN PAGE
  if (!loggedIn) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Login</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={!isValid} onClick={() => setLoggedIn(true)}>
          Login
        </button>
      </div>
    );
  }

  // USERS PAGE
  const displayedUsers = showAll ? users : users.slice(0, 5);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {displayedUsers.map((user) => (
          <div
            key={user.login.uuid}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px",
            }}>
            <img src={user.picture.large} alt="" width="100%" />

            <h3>
              {user.name.first} {user.name.last}
            </h3>

            <p>{user.email}</p>
            <p>{user.location.country}</p>
            <p>Age: {user.dob.age}</p>
          </div>
        ))}
      </div>

      {!showAll && <button onClick={() => setShowAll(true)}>Show More</button>}
    </div>
  );
}

export default App;
