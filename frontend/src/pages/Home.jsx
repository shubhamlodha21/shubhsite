import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page hero-page">
      <h1>Building products that move your business forward</h1>
      <p>
        We're a small team helping companies ship reliable software &mdash; from web
        applications to cloud infrastructure.
      </p>
      <div className="cta-row">
        <Link to="/services" className="btn btn-primary">
          Our Services
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
