import { Link, useNavigate, useParams } from "react-router";
import { categories, products } from "../data/products";

export function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <h1>Vara fannst ekki!</h1>
        <Link to="/products">Til baka í vörur</Link>
      </>
    );
  }

  const category = categories.find((c) => c.slug === product.category);

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="price">Verð: {product.price} kr.</p>
      {category && (
        <p>
          Flokkur:{" "}
          <Link className="tag" to={`/categories/${category.slug}`}>
            {category.name}
          </Link>
        </p>
      )}
      <button onClick={() => navigate(-1)}>Til baka</button>
      <Link to="/products">Allar vörur</Link>
    </div>
  );
}
