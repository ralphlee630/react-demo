import { useState } from 'react';
import PollOption from './PollOption'; 
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [pollOptions, setPollOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Bird', count: 0 },
    { option: 'Fish', count: 0 },
  ]);

  const handleVote = (index) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index].count += 1;
    setPollOptions(updatedOptions);
  };

  const getLeader = () => {
    const leader = pollOptions.reduce((max, option) =>
      option.count > max.count ? option : max, pollOptions[0]);
    return leader;
  };

  const leader = getLeader();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vote for Your Favorite Pet!</h1>
      <div className="card">
        {pollOptions.map((option, index) => (
          <PollOption
            key={index}
            label={option.option}
            count={option.count}
            onVote={() => handleVote(index)} 
          />
        ))}
        <h2>
          Current Leader: {leader.option} with {leader.count} votes.
        </h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
