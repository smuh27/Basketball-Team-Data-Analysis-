import React, { useEffect, useState } from 'react';
import '../styles/pages.css'; 
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
    return (
        <div className='table-container'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
};

export default Roster;