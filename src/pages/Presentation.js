import React, { useEffect, useState } from "react";
import Stat from '../components/Statistique';
import Word from '../components/Word';
import Banner from '../components/Banner';
import LoadingSpinner from "../components/LoadingSpinner";
function Présentation(){
    const [loadingStat, setLoadingStat] = useState(true);
    const [loadingWord, setLoadingWord] = useState(true);
    const [loaded, setLoaded] = useState(false);

    return(
        <div className="content-page page-body">
            <Banner title="Présentation" noSearch />
            <Stat loaded={()=>setLoadingStat(false)}/>
            {loadingStat && loadingWord && <LoadingSpinner />}
            <Word loaded={()=>setLoadingWord(false)}/>
        </div>
        
    )
}
export default Présentation;