import { fetchProducts } from "../api/products";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Products.module.css";
import eth from "../styles/eth.png";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const info = await fetchProducts();

      setProducts(info);
    }
    getProducts();
  }, []);

  return (
    <div className={styles.Products}>
      {products?.map((product) => {
        return (
          <div className={styles.box} key={product.id}>
            <img className={styles.img} src={product.imageUrl} />
            <h6>{product.productName}</h6>
            <div>
              <h6>
                <img src={eth} height={15} width={15} alt="Eth" />
                .0
                {product.price}
              </h6>
            </div>
            <button
              className={styles.button}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
