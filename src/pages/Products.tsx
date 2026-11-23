import { Link } from "react-router";
import { products } from "../data/products";

export function Products() {
  return (
    <>
      <h1>Vörur</h1>
      <ul className="card-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link className="card" to={`/product/${product.id}`}>
              <span>{product.name}</span>
              <span className="price">{product.price} kr.</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
