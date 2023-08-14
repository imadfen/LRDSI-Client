import React, { useState } from 'react';
import Banner from "../components/Banner";
import Forme from '../components/Forme';
import Info from '../components/Info';
import SuccessNotif from '../components/SuccessNotif';

function Contact() {
  const [successNotif, setSuccessNotif] = useState(false);

  return (
    <div className="page-body">
      {successNotif ? <SuccessNotif  depenVar={successNotif} time={4000} text='Votre message a été envoyé' changeVar={()=>setSuccessNotif(false)}/> : null}
        <Banner title="Contact" noSearch={true}/>
        <div className='contact'>
        <div className='container'>
            <div className='forme'>
                
                <Info/>
                <Forme success={()=>setSuccessNotif(true)}/>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact