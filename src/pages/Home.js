import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import ShortPres from '../components/ShortPres';
import shortenPres from '../Functions/shortenPres'
import LoadingSpinner from '../components/LoadingSpinner';
import Actualities from '../components/ActualitySection';
import fetchFunction from '../Functions/fetchFunction';

function Home({isLargeScreen}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [pres, setPres] = useState(["..."])
  const [slideElements, setSlideElements] = useState([{}])
  const [actualities, setActualities] = useState([{}])


  useEffect(() => {
    Promise.all([
      // presentation Data fetching:
      fetchFunction("/presentation").then(
        response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        }
      ),

      // slider Data fetching:
      fetchFunction("/slider").then(
        response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        }
      ),

      // actualities Data fetching:
      fetchFunction("/actualities").then(
        response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        }
      )
    ]).then(([presData, sliderData, actualitiesData]) => {
      // presentation Data setting:
      setPres(shortenPres(presData[0].post_content))
      
      // slider Data setting:
      var list = []
      sliderData.forEach(element => {
        list = [...list, element]
      })
      setSlideElements(list)
      
      
      // actualities Data setting:
      var list = []
      actualitiesData.forEach(element => {
        list = [...list, element]
      })
      setActualities(list)


      // disable loading spinner:
      setLoading(false)

    }).catch(
      error => {
          setLoading(false)
          setError(true);
      }    
    )
  }, []);


  return (
    <div className="page-body home-content-page">
      {loading
      ? <LoadingSpinner/>
      : error
        ? <span className='error-msg'>Erreur Chargement des Données</span>
        : <>
          <Slider sliderData={slideElements} isLargeScreen={isLargeScreen}/>
          <ShortPres presData={pres}/>
          <Actualities actualitiesData={actualities}/>
        </>
      }
    </div>
  )
}

export default Home