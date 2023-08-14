import React from "react";
import './info.css';
import Mail from '../assets/email.png';
import Map from '../assets/map.png';
import Phone from '../assets/phone.png';
function Info(){
    return(
        <div className="body-page">
            <h3 className="titre">LRDSI</h3>
            <div className="content">
                <p1 className="text">contacter nous pour votre projet ou pour obtenir plus d'information sur Laboratoire ou dommaine recherche scientifique</p1>
                <div className="info">
                    <div className="content-info">
                        <img src={Map}/>
                        <p>BP 270, Route de Soumâa 09100 - Blida - Algérie</p>
                    </div>
                    <div className="content-info">
                        <img src={Mail} />
                        <p><a href={'mailto:lrdsi@univ-blida.dz'}>lrdsi@univ-blida.dz</a></p>
                    </div>
                    <div className="content-info">
                        <img src={Phone}/>
                        <p>+ 213 (0)25 27 24 36</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Info;
