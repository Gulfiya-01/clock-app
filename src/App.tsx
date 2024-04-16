import { useEffect, useState } from 'react';
import './App.css';
import Detail from './components/Detail';
import Phrase from './components/Prase';
import Time from './components/Time';

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();
  const greeting = getGreeting(currentHour);
  function getGreeting(hour: number): string {
    if (hour >= 5 && hour < 12) {
      return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }
  useEffect(() => {
    document.body.classList.add(greeting.toLowerCase().replace(' ', '-'));
    return () => {
      document.body.classList.remove(greeting.toLowerCase().replace(' ', '-'));
    };
  }, [greeting]);
  return (
    <div className="app-container">
      {!showDetail && <Phrase />}
      <section
        className={`time-component ${greeting}`}
        style={{ marginTop: showDetail ? '50px' : '150px' }}
      >
        <Time
          greeting={greeting}
          currentHour={currentHour}
          currentMinutes={currentMinutes}
        />
      </section>
      <button className="btn-more" onClick={toggleDetail}>
        {showDetail ? 'Less' : 'More'}
      </button>
      
      <section className="detail-wrapper">{showDetail && <Detail />}</section>
    </div>
  );
}

export default App;
