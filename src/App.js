import Navbar from './components/navbar';
import Cards from './components/cards';
import About from './components/About';
import Data from './data'
import './App.css';

function App() {
  const information=Data.map(info=>{
    return (<Cards
    key={info.id}
    {...info}
    />)
  })
  return (
    <div className='App'>
    <Navbar />
    <About />
    <section className='card-list'>
    {information}
    </section>
    </div>
  );
}

export default App;
