import React, { useEffect, useState } from "react";
import Stat from "../components/Statistique";
import Word from "../components/Word";
import Banner from "../components/Banner";
import LoadingSpinner from "../components/LoadingSpinner";
import fetchFunction from "../Functions/fetchFunction";

function Présentation() {
  const [stats, setStats] = useState([]);
  const [chefWord, setChefWord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      fetchFunction("/stat").then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      }),
      fetchFunction("/presentation").then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      }),
    ])
      .then(([statsData, presentationData]) => {
        setStats(statsData);
        setChefWord(presentationData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorFetch(true);
        console.log("failed loading data");
      });
  };

  return (
    <div className="content-page page-body">
      <Banner title="Présentation" noSearch />
      {isLoading ? (
        <LoadingSpinner />
      ) : errorFetch ? (
        <span className="error-msg">Erreur Chargement des Données</span>
      ) : (
        <>
          <Stat data={stats} />
          <Word data={chefWord} />
        </>
      )}
    </div>
  );
}
export default Présentation;
