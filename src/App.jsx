import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const productApi = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(productApi)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hi, I am Indresh 👋</h1>
      <p>Total products: {products.length}</p>

      <h2>Products:</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;