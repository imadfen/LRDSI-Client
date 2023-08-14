import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Banner from '../components/Banner'
import PagesList from '../components/PagesList'
import '../App.css'
import PubCommSection from '../components/PubCommSection';
import ThesMemoSection from '../components/ThesMemoSection';
import EventsSection from '../components/EventsSection';
import LoadingSpinner from '../components/LoadingSpinner';
import filterArray from '../Functions/filterArray';
import fetchFunction from '../Functions/fetchFunction';



function PubEvents() {
  const [publications, setPublications] = useState([]);
  const [communications, setCommunications] = useState([]);
  const [thesis, setThesis] = useState([]);
  const [memories, setMemories] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentContent, setContent] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFunction("/pubevents").then(
      response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Network response was not ok');
          }
      }
    ).then(
      data => {
          setPublications(data[0])
          setCommunications(data[1])
          setThesis(data[2])
          setMemories(data[3])
          setEvents(data[4])
          setLoading(false)
      }
    ).catch(
      error => {
          console.error(error);
          setLoading(false)
          setError(true);
      }    
    )
  }, []);


  const Spinner = () => {
      return <ClipLoader color="#36d7b7" />
  };
  

  const ContentRenderer = () => {
    switch (currentContent) {
      case 0:
        return (
            <PubCommSection pubList={filterArray(publications, search)} commList={filterArray(communications, search)} />
          );

      case 1:
        return (
            <ThesMemoSection ThesList={filterArray(thesis, search)} memoList={filterArray(memories, search)} />
          );
    
      case 2:
        return (
          <EventsSection List={filterArray(events, search)}/>
        );

      default:
        return (<></>);
    }
  }

  return (
    <div className="page-body">
      <Banner title="Publications et Evènements" search={setSearch}/>
      {loading && <div className='spinner-container'><LoadingSpinner /></div>}
      {error
      ?   <div className='error-msg-container'><span className='error-msg'>Erreur Chargement des Données</span></div>
      :   !loading
        ? <div className='pub-event-content'>
            <PagesList switchContent={(index) => setContent(index)} selected={currentContent}/>
            <div className='content'>
                {
                  ContentRenderer()
                }
            </div>
          </div>
        : ""
      }
    </div>
  )
}

export default PubEvents