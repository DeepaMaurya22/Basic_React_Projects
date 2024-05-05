import { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledbtn, setDisabledbtn] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabledbtn(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="LoadMoreContainer">
        <div className="productContainer">
          {products && products.length
            ? products.map((item, index) => (
                <div key={index} className="product">
                  <img src={item.thumbnail} alt={item.title} />
                  {/* <h1>{item.id}</h1> */}
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))
            : null}
        </div>
        <button
          disabled={disabledbtn}
          className="productBtn"
          onClick={() => setCount(count + 1)}
        >
          Load More
        </button>
        {disabledbtn ? <p>Reached to the end </p> : null}
      </div>
    </div>
  );
}
