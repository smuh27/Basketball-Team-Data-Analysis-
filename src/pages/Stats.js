import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Pages.css'; 
const Stats = () => {
    const [teamstats, setTeamstats] = useState([]);


    
    useEffect(() => {
        // Fetch data from backend
        axios.get('http://localhost:5000/api/team_stats')
            .then(response => {
                setTeamstats(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the players!", error);
            });
    }, []);

    return (
        <div className='table-container'>
            <div className="table-content">
                <h2 className='head'> 
                    2024-2025 Masala Ballas Regular Season Game Stats
                </h2>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Game #</th>
                            <th>Opponent</th>
                            <th>Points</th>
                            <th>FGM</th>
                            <th>FGA</th>
                            <th>FG%</th>
                            <th>3PM</th>
                            <th>3PA</th>
                            <th>3P%</th>
                            <th>2PM</th>
                            <th>2PA</th>
                            <th>2P%</th>
                            <th>ORB</th>
                            <th>DRB</th>
                            <th>TRB</th>
                            <th>AST</th>
                            <th>STL</th>
                            <th>BLK</th>
                            <th>TOV</th>
                            <th>PF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamstats.map(team => (
                            <tr key={team.match_number}>
                                <td><a>{team.match_number}</a></td>
                                <td>{team.opponent}</td>
                                <td>{team.points}</td>
                                <td>{team.FGM}</td>
                                <td>{team.FGA}</td>
                                <td>{team['FG%'] * 100}</td>
                                <td>{team['3PM']}</td>
                                <td>{team['3PA']}</td>
                                <td>{team['3P%'] * 100}</td>
                                <td>{team['2PM']}</td>
                                <td>{team['2PA']}</td>
                                <td>{team['2P%'] * 100}</td>
                                <td>{team.ORB}</td>
                                <td>{team.DRB}</td>
                                <td>{team.TRB}</td>
                                <td>{team.AST}</td>
                                <td>{team.STL}</td>
                                <td>{team.BLK}</td>
                                <td>{team.TOV}</td>
                                <td>{team.PF}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );  
};

export default Stats;
