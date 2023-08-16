import React, { useEffect, useState } from "react";
import './statistique.css';
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';
import fetchFunction from "../Functions/fetchFunction";


function Statistique({ loaded }) {
  const navigate = useNavigate();
  const [tableData1, setTableData1] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const data = await fetchFunction('/stat').then(res => res.json());
        setTableData1(data);
        loaded()
      } catch (error) {
        setError(true)
        loaded()
      }
    };

    fetchTableData();
  }, []);

  return (
    <div>
      {error
        ? <span className='error-msg'>Erreur Chargement des Données</span>
        :
        <div className="page">
          <div className="card">
            <Fade top distance="30%">
              <h3 className="tab">Nombre des Équipes</h3>
              <h1 className="length tab">{tableData1[0]}</h1>
              <div className="tab link" onClick={() => navigate("/teams")}>
                <p>voire plus</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Fade>
          </div>

          <div className="card">
            <Fade top distance="30%">
              <h3 className="tab">Nombre des Projets</h3>
              <h1 className="length tab">{tableData1[1]}</h1>
              <div className="tab link" onClick={() => navigate("/projects")}>
                <p>voire plus</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Fade>
          </div>

          <div className="card">
            <Fade top distance="30%">
              <h3 className="tab">Nombre des Articls</h3>
              <h1 className="length tab">{tableData1[2]}</h1>
              <div className="tab link" onClick={() => navigate("/pubevents")}>
                <p>voire plus</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Fade>
          </div>
        </div>
      }
    </div>
  );
}
export default Statistique;