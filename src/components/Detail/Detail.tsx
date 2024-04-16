import { useEffect, useState } from 'react';
import './Detail.css';
function Detail() {
  const [time, setTime] = useState({
    dayOfWeek: '',
    dayOfYear: '',
    weekNumber: '',
    timeZone: ''
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const timeRes = await fetch('https://worldtimeapi.org/api/ip');
        const timeData = await timeRes.json();
        setTime({
          dayOfWeek: timeData.day_of_week,
          dayOfYear: timeData.day_of_year,
          weekNumber: timeData.week_number,
          timeZone: timeData.timezone
        });
        return timeData;
      } catch (err) {
        if (err instanceof Error) {
          console.error('Error fetching data:', err);
        }
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="detail-info">
        <div className="detail-content">
          <p className="name">CURRENT TIMEZONE</p>
          <span className="data">{time.timeZone}</span>
        </div>
        <div className="detail-content">
          <p className="name">DAY OF THE YEAR </p>
          <span className="data">{time.dayOfYear}</span>
        </div>
        <div className="detail-content">
          <p className="name">DAY OF THE WEEK</p>
          <span className="data">{time.dayOfWeek}</span>
        </div>
        <div className="detail-content">
          <p className="name">WEEK NUMBER</p>
          <span className="data">{time.weekNumber}</span>
        </div>
      </div>
    </>
  );
}

export default Detail;
