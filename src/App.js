import './App.css';
import Card from './component/Card/Card';
import Exercise from './component/Exercise/Exercise';

function App() {
  return (
    <div className="App container">
      <section className='row'>
        <div className='col-8'>
          <Exercise></Exercise>
        </div>
        <div className='card-section col-4'>
          <Card></Card>
        </div>
      </section>
    </div>
  );
}

export default App;
