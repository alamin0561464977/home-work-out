import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Card from './component/Card/Card';
import Exercise from './component/Exercise/Exercise';

function App() {
  const [totalSeconds, setTotalSeconds] = useState(+localStorage.getItem('totalSeconds'));
  const addToCard = time => {
    const total = totalSeconds + JSON.parse(time)
    setTotalSeconds(total)
    console.log(total)
  }
  return (
    <div className="App container">
      <section className='section row'>
        <div className='col-12 col-lg-8 col-sm-12'>
          <Exercise addToCard={addToCard}></Exercise>
        </div>
        <div className='card-section col-12 col-lg-4 col-sm-12'>
          <Card totalSeconds={totalSeconds}></Card>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
