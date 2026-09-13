import { useEffect, useState } from "react";
import { getTeam } from "../api";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getTeam()
      .then((data) => {
        setTeam(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="page">
      <h1>Team</h1>
      {status === "loading" && <p>Loading team...</p>}
      {status === "error" && <p className="error">Could not load team. Is the API running?</p>}
      {status === "ready" && (
        <div className="card-grid">
          {team.map((member) => (
            <article key={member.id} className="card">
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              {member.bio && <p>{member.bio}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
