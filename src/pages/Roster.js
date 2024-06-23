import React, { useEffect, useState } from 'react';
import '../styles/Pages.css'; 
import axios from 'axios';

const Roster = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Fetch data from backend
        axios.get('http://localhost:5000/api/players')
            .then(response => {
                setPlayers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the players!", error);
            });
    }, []);


    const sortedPlayers = [...players].sort((a, b) => b.points - a.points);
    console.log(sortedPlayers)
    const top5Pts = sortedPlayers.slice(0, 5);
    

    return (
        <div className='table-container'>
            <div className="table-content">
                <h2 className='head'> 
                    2024-2025 Masala Ballas Regular Season Roster
                </h2>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Nickname</th>
                            <th>HT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.id}>
                                <td><a>{player.name}</a></td>
                                <td>{player.position}</td>
                                <td>{player.nickname}</td>
                                <td>{player.height}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='team-leaders'>
                <ol>
                    {top5Pts.map(player => (
                    <li key={player.id}>
                        {player.name} - {player.points} points  
                    </li>
                    ))}
                </ol>

            </div>
        </div>
    );    
};

export default Roster;
