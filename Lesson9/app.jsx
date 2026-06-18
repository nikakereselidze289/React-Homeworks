import { useEffect, useState } from "react";

const DEFAULT_EMAIL = "random@gmail.com";
const DEFAULT_PASSWORD = "random123";

export default function App() {
  // AUTH
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([
    { email: DEFAULT_EMAIL, password: DEFAULT_PASSWORD },
  ]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  // CART
  const [cart, setCart] = useState([]);

  const limit = 10;

  // FETCH PRODUCTS
  useEffect(() => {
    if (user) fetchProducts();
  }, [skip, user]);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
    const data = await res.json();
    setProducts(data.products);
  };

  // REGISTER
  const handleRegister = () => {
    setUsers([...users, { email, password }]);
    setIsLogin(true);
    alert("Registered successfully");
  };

  // LOGIN
  const handleLogin = () => {
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (found) {
      setUser(found);
    } else {
      alert("Wrong email or password");
    }
  };

  // CART
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    setCart([]);
  };

  // AUTH SCREEN
  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

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

        {isLogin ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleRegister}>Register</button>
        )}

        <p style={{ cursor: "pointer" }} onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Register" : "Login"}
        </p>

        <p>Default login: random@gmail.com / random123</p>
      </div>
    );
  }

  // MAIN SHOP
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome {user.email}</h2>

      <button onClick={logout}>Logout</button>

      <h3>Cart: {cart.length}</h3>

      {/* PRODUCTS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid gray",
              padding: 10,
              width: 200,
            }}>
            <h4>{p.title}</h4>
            <p>${p.price}</p>

            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div style={{ marginTop: 20 }}>
        <button disabled={skip === 0} onClick={() => setSkip(skip - 10)}>
          Prev
        </button>

        <button onClick={() => setSkip(skip + 10)}>Next</button>
      </div>
    </div>
  );
}
