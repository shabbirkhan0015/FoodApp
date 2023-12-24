
import './App.css';
import Navigation from './components/Navigation';
import SectionContainer from './components/SectionContainer';
import {useState} from 'react'

function App() {
  const [filter, setfilter] =useState("all");
  const handleClick = (e) => {
    setfilter(e.target.name);
  };
  return (
    <div>
      <Navigation handleClick={handleClick}/>
      <SectionContainer filter={filter} />
    </div>
  );
}

export default App;
