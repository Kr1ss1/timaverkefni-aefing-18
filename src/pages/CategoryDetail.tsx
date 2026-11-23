import { Link, useParams, useSearchParams } from "react-router";
import { categories, products } from "../data/products";

export function CategoryDetail() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort"); // "price" eða null
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <>
        <h1>Flokkur fannst ekki!</h1>
        <Link to="/categories">Til baka í flokka</Link>
      </>
    );
  }

  const categoryProducts = products.filter((p) => p.category === category.slug);

  // Afritum fylkið með [...] svo sort breyti ekki upprunalega fylkinu
  const shownProducts =
    sort === "price"
      ? [...categoryProducts].sort((a, b) => a.price - b.price)
      : categoryProducts;

  return (
    <>
      <h1>{category.name}</h1>
      <p>
        <Link to="?sort=price">Raða eftir verði</Link>
        {" | "}
        <Link to=".">Upprunaleg röð</Link>
      </p>
      <ul className="card-list">
        {shownProducts.map((product) => (
          <li key={product.id}>
            <Link className="card" to={`/product/${product.id}`}>
              <span>{product.name}</span>
              <span className="price">{product.price} kr.</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/categories">Til baka í flokka</Link>
    </>
  );
}
