import React from 'react';
import '../styles/Pages.css'; 
import Schedule from '../components/Schedule';

const HomePage = () => {
  return (
    <div>
      <main>
        <section>
          <div className="home-conatainer">
              <h1>Masala Ballas</h1>    
              <img src="" alt="Team Logo" className='team-logo'></img>
          </div>
        </section>
        <div className='about-section'>
            <h2>
                About Us
            </h2>
            <p>
                Welcome to the official page of the recreational team Masala Ballas. Established in 2022, a new and upcoming team looking for its first championship. Young and passionate, follow along and check out the teams progress. 
            </p>
        </div>

        <div className='schedule-section'>
            <h2>
                Team News
            </h2>
            <p>
              Arjun Bassi no longer apart of the team. 
            </p>
        </div>
      </main>

      <div className='gallery-section'>
        <h2>
            Check out Some highlights!
        </h2>
      </div>
    
      
    </div>
  );
}

export default HomePage;