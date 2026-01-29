import { useEffect, useState } from "react";
import partyFetch from "../axios/config";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [parties, setParties] = useState(null);

  //  LoadParties
  useEffect(() => {
    const LoadParties = async () => {
      const res = await partyFetch.get("parties");

      console.log(res);

      setParties(res.data);
    };

    LoadParties();
  }, []);

  if (!parties) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Suas festas</h1>
      <div className="parties-container">
        {parties.length === 0 && <p>Não há festas cadastradas</p>}
        {parties.map((party) => (
          <div className="party" key={party._id}>
            <img src={party.image} alt={party.title} />
            <h3>{party.title}</h3>
            <Link to={`/party/${party._id}`} className="btn-secondary">
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
