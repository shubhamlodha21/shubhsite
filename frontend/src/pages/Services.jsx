import { useEffect, useState } from "react";
import { getServices } from "../api";

export default function Services() {
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="page">
      <h1>Services</h1>
      {status === "loading" && <p>Loading services...</p>}
      {status === "error" && <p className="error">Could not load services. Is the API running?</p>}
      {status === "ready" && (
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.id} className="card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
