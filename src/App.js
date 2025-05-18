import './App.css';
import RestoranCard from './_components/RestoranCard';
import data from './_mockData/Data'

function App() {
  return (
    <div className="App">
        <section className='Card-section'>
          {data.map((restoran) => {
            return(
              <RestoranCard id={restoran.id} name={restoran.name} imageUrl={restoran.imageUrl} cuisine={restoran.cuisine} reytinq={restoran.reytinq}/>
            );
          })}
        </section>
    </div>
  );
}

export default App;
