import React, { useState } from 'react'
import Mission from "./Mission";
import "./Team.css"
import bullet from "../assets/bullet-list.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Members from "./Members";
import Doctorals from './Doctorals';

function Team(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const teamDetails = props.details
    const teamMembers = props.members
    const teamDoctorals = props.doctorals

    return (
        <div className={'team ' + teamDetails.id}>
            <div className='teamTitle'>
                <img src={bullet} alt="" className='list-bullet'/>
                <h2>{teamDetails.name}</h2>
            </div>

            <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                <TabList>
                    <Tab><strong>Missions</strong></Tab>
                    <Tab><strong>Membres</strong></Tab>
                    <Tab><strong>Doctorants</strong></Tab>
                </TabList>

                <TabPanel>
                    <Mission text={teamDetails.mission} teamId={teamDetails.id} className="team-mission"/>
                </TabPanel>

                <TabPanel>
                    <Members chefId={teamDetails.chef_id} list={teamMembers}/>
                </TabPanel>

                <TabPanel>
                    <Doctorals list={teamDoctorals}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Team