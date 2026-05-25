const data = [
  {
    id: 1,
    firstname: "Molly",
    lastname: "Begbie",
    email: "mbegbie0@parallels.com",
    gender: "Non-binary",
    age: 12,
    job: "Tax Accountant",
  },
  {
    id: 2,
    firstname: "Mayer",
    lastname: "Kuhnke",
    email: "mkuhnke1@myspace.com",
    gender: "Agender",
    age: 39,
    job: "Legal Assistant",
  },
  {
    id: 3,
    firstname: "Susy",
    lastname: "Kyneton",
    email: "skyneton2@buzzfeed.com",
    gender: "Male",
    age: 36,
    job: "Director of Sales",
  },
];

function App() {
  return (
    <div className="container">
      {data.map((user) => (
        <div className="card" key={user.id}>
          <h2>
            {user.firstname} {user.lastname}
          </h2>

          <p>ასაკი: {user.age}</p>
          <p>სქესი: {user.gender}</p>
          <p>იმეილი: {user.email}</p>
          <p>პროფესია: {user.job}</p>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
