import './statistique.css';
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';


function Statistique({ data }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page">
        <div className="card">
          <Fade top distance="30%">
            <h3 className="tab">Nombre des Équipes</h3>
            <h1 className="length tab">{data[0]}</h1>
            <div className="tab link" onClick={() => navigate("/teams")}>
              <p>voire plus</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </Fade>
        </div>

        <div className="card">
          <Fade top distance="30%">
            <h3 className="tab">Nombre des Projets</h3>
            <h1 className="length tab">{data[1]}</h1>
            <div className="tab link" onClick={() => navigate("/projects")}>
              <p>voire plus</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </Fade>
        </div>

        <div className="card">
          <Fade top distance="30%">
            <h3 className="tab">Nombre des Articls</h3>
            <h1 className="length tab">{data[2]}</h1>
            <div className="tab link" onClick={() => navigate("/pubevents")}>
              <p>voire plus</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default Statistique;