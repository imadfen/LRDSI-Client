import React, { useState, useEffect } from 'react'
import Team from '../components/Team';
import Banner from '../components/Banner';
import Fade from 'react-reveal/Fade';
import LoadingSpinner from '../components/LoadingSpinner';
import searchStringInObject from '../Functions/searchStringInObject';
import fetchFunction from '../Functions/fetchFunction';
const { v4: uuidv4 } = require('uuid');



function Teams() {
    const [teams, setTeams] = useState([]);
    const [members, setMembers] = useState([]);
    const [doctorals, setDoctorals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetchFunction("/teams")
        .then(response => response.json())
        .then(
            data => {
                setTeams(data[0])
                setMembers(data[1])
                setDoctorals(data[2])
                setLoading(false)
            }
        ).catch(
            error => {
                setLoading(false)
                setError(true);
            }    
        )
    }, []);



    let teamAttributes = []
    
    teams.map(team => {
        const teamMembers = []
        const teamDoctorals = []
        
        const teamKey = team.team_key

        members.map(teamMember => {
            if (teamKey == teamMember.team) {
                teamMembers.push(teamMember)
            }
        })
        doctorals.map(doctoral => {
            if (teamKey == doctoral.team) {
                teamDoctorals.push(doctoral)
            }
        })

        if (teamMembers.length != 0 || teamDoctorals.length != 0) {
            var newTeam = [{
                "details": team,
                "members": teamMembers,
                "doctorals": teamDoctorals
            }]

            if (search == "" || searchStringInObject(newTeam[0].details, search) || searchStringInObject(newTeam[0].members, search) || searchStringInObject(newTeam[0].doctorals, search)) {
                teamAttributes = teamAttributes.concat(newTeam)
            }
        }
    })



  return (
    <div className='team-content-page content-page page-body'>
        <Banner title="Équipes" search={setSearch}/>
        {loading && <LoadingSpinner/>}
        {error
        ? <span className='error-msg'>Erreur Chargement des Données</span>
        :teamAttributes.map(team =>
            <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                <Team details={team.details} members={team.members} doctorals={team.doctorals}/>
            </Fade>
        )}
    </div>
  )
}

export default Teams