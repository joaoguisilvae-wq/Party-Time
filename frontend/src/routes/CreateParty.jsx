import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useToast from "../hooks/useToast";

import "./Form.css";

const CreateParty = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [image, setImage] = useState("");
  const [partyServices, setPartyServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const res = await partyFetch.get("service");

      setServices(res.data);
    };

    loadServices();
  }, []);

  const CreateParty = async (e) => {
    try {
      e.preventDefault();

      const party = {
        title,
        author,
        description,
        budget,
        image,
        services: partyServices,
      };

      const res = await partyFetch.post("parties", party);

      if (res.status === 201) {
        navigate("/");

        useToast(res.data.msg);
      }
    } catch (error) {
      useToast(error.response.data.msg, "error");
    }
  };

  const handlServices = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    const filteredService = services.filter((s) => s._id === value);

    if (checked) {
      setPartyServices((services) => [...services, filteredService[0]]);
    } else {
      setPartyServices((services) => services.filter((s) => s._id !== value));
    }
  };
  return (
    <div className="form-page">
      <h2>Crie sua festa</h2>
      <p>Defina o seu orçamento e escolha os serviços</p>
      <form onSubmit={(e) => CreateParty(e)}>
        <label>
          <span>Nome da festa:</span>
          <input
            type="text"
            placeholder="Seja criatiivo!"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input
            type="text"
            placeholder="Quem esta dando a festa?"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea
            placeholder="Conte mais sobre a festa"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          <span>Orçamento:</span>
          <input
            type="text"
            placeholder="Quanto você pretende investir"
            required
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a url da imagem"
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <h2>Escolha os serviços</h2>
        <div className="services-container">
          {services.length === 0 && <p>Carregando...</p>}
          {services.length > 0 &&
            services.map((service) => (
              <div className="service" key={service._id}>
                <img src={service.image} alt={service.name} />
                <p className="service-name">{service.name}</p>
                <p className="service-price">R${service.price}</p>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value={service._id}
                    onChange={(e) => handlServices(e)}
                  />
                  <p>Marque para solicitar</p>
                </div>
              </div>
            ))}
        </div>
        <input type="submit" value="Criar festa" className="btn" />
      </form>
    </div>
  );
};

export default CreateParty;
