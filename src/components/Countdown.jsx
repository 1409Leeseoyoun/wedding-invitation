import {useState, useEffect} from 'react';

function Countdown() {
  const [dayLeft, setDayLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date('2025-4-20');
    const diff = targetDate - today;

    const remaining = Math.ceil(diff/(1000*60*60*24));
    setDayLeft(remaining);
  }, []);

  return (
    <div>
      <div>결혼식까지 남은 날짜</div>
      <div>D - {dayLeft}</div>
    </div>
  )
}

export default Countdown;