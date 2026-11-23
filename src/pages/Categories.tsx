import { Link } from "react-router";
import { categories, products } from "../data/products";

export function Categories() {
  return (
    <>
      <h1>Flokkar</h1>
      <ul className="card-list">
        {categories.map((category) => {
          const count = products.filter(
            (p) => p.category === category.slug,
          ).length;
          return (
            <li key={category.slug}>
              <Link className="card" to={`/categories/${category.slug}`}>
                {category.name} ({count})
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
