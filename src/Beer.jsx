import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "./services/api";

//Esta página irá renderizar cada bebida individualmente

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  const getBeer = async () => {
    const { data } = await api.get(`/beers/${id}/`);    
    setBeer(data[0]);
    console.log(data)
  };

  useEffect(() => {
    getBeer();
  });

  return (
    <div>
      <h2>Cerveja número: {beer.id}</h2>
      <div className="card">
        <img src={beer.image_url} alt="beer-detail" />
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips} </p>
      </div>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Beer;
