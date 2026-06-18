function App() {
  const products = [
    {
      id: 1,
      title: "Lorem, ipsum dolor",
      image: "",
      stock: "In Stock",
      rating: "1.5/5",
      badge1: "sport",
      badge2: "lifestyle",
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor",
      image: "",
      stock: "Out Stock",
      rating: "3.4/5",
      badge1: "Casual",
      badge2: "lifestyle",
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor",
      image: "",
      stock: "Out Stock",
      rating: "0.5/5",
      badge1: "sport",
      badge2: "lifestyle",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor",
      image: "",
      stock: "In Stock",
      rating: "1/5",
      badge1: "Casual",
      badge2: "lifestyle",
    },
    {
      id: 5,
      title: "Lorem, ipsum dolor",
      image: "",
      stock: "In Stock",
      rating: "2.5/5",
      badge1: "Casual",
      badge2: "lifestyle",
    },
    {
      id: 6,
      title: "Lorem, ipsum dolor",
      image: "",
      stock: "Out Stock",
      rating: "4.9/5",
      badge1: "sport",
      badge2: "lifestyle",
    },
  ];

  return (
    <>
      <main className="container">
        {products.map((product) => (
          <div className="shopping-item" key={product.id}>
            <h3>{product.title}</h3>

            <img src={product.image} alt={product.title} />

            <div className="description">
              <span>{product.stock}</span>
              <span>{product.rating}</span>
            </div>

            <div className="badges">
              <span className="badge-1">{product.badge1}</span>
              <span className="badge-2">{product.badge2}</span>
            </div>

            <button>Add To Cart</button>
          </div>
        ))}
      </main>

      <section className="container">
        <div className="block-listing">
          <span className="badge-1">Random 1</span>
          <span className="badge-2">Random 2</span>
          <span className="badge-3">Random 3</span>
          <span className="badge-4">Random 4</span>
        </div>

        <div className="banner"></div>
      </section>
    </>
  );
}

export default App;
