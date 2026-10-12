import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found | Morocco Excursions"
        description="The page you requested could not be found. Explore our Morocco tours and excursions."
        noIndex
      />
      <main className="page-container tour-state">
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/">Back to tours</Link>
      </main>
    </>
  );
}
