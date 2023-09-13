import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import api from "./services/api";

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const { data } = await api.get('/beers');
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  });

  return (
    <div className="grid">
      {beers.length ? beers.map((beer) => <Card key={beer.id} data={beer}/>) : null}
    </div>
  );
};

export default Home;
