import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Banner from '../components/Banner'
import Project from '../components/Project'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Fade from 'react-reveal/Fade';
import LoadingSpinner from '../components/LoadingSpinner';
import filterArray from '../Functions/filterArray';
import fetchFunction from '../Functions/fetchFunction';
const { v4: uuidv4 } = require('uuid');

function Projects() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [projects, setProjects] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        fetchFunction("/projects").then(
            response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            }
        ).then(
            data => {
                setProjects(data)
                setLoading(false)
            }
        ).catch(
            error => {
                setLoading(false)
                setError(true);
            }    
        )
    
    }, []);
    

    const nat = []
    const internat = []

    projects.map(project => {
        if (project.type == "nat") {
            nat.push(project)
        }else{
            internat.push(project)
        }
    })


    const Spinner = () => {
        return <ClipLoader color="#36d7b7" />
    };



    return (
        <div className='projects-content-page content-page page-body'>
            <Banner title="Projets" search={setSearch}/>
            {loading && <LoadingSpinner />}
            {error
            ?   <span className='error-msg'>Erreur Chargement des Données</span>
            :   !loading
                ?   <Tabs selectedIndex={selectedTabIndex} onSelect={index => setSelectedTabIndex(index)} className="projects-section">
                        <TabList>
                            <Tab><strong>National</strong></Tab>
                            <Tab><strong>International</strong></Tab>
                        </TabList>

                        <TabPanel className="project-panel">
                            {filterArray(nat, search).map(project => 
                                <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                                    <Project key={uuidv4()} project={project} />
                                </Fade>
                            )}
                        </TabPanel>
                        <TabPanel className="project-panel">
                            {filterArray(internat, search).map(project =>
                                <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                                    <Project key={uuidv4()} project={project} />
                                </Fade>
                            )}
                        </TabPanel>
                    </Tabs>
                : ""
            }
        </div>
    )
}

export default Projects