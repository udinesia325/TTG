import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [waktu, setWaktu] = useState(0);
  const [isStop, setIsStop] = useState(true);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    let interval;
    if (isStop == false) {
      interval = setInterval(() => setWaktu(waktu + 1), 10);
    }
    return () => clearInterval(interval);
  }, [isStop, waktu]);

  const menit = waktu => Math.floor((waktu % 360000) / 6000);

  const detik = waktu =>  Math.floor((waktu % 6000) / 100);

  const mili = waktu => waktu % 100;

  const startOrPause = () => setIsStop(!isStop);
  const stop = () => {
    setIsStop(true);
    setWaktu(0);
  };
  const addFlag = () => setFlag((flag) => [waktu,...flag]);

  return (
    <div className="wrapper">
      <h1>
        {menit(waktu).toString().padStart(2, "0")}:{detik(waktu).toString().padStart(2, "0")}:
        {mili(waktu).toString().padStart(3, "0")}
      </h1>
      <div className="group">
        <button onClick={startOrPause} className={isStop?"start":"pause"}>{isStop ? "Start" : "Pause"}</button>
        <button onClick={stop} className="stop">Stop</button>
        <button onClick={addFlag} className="flag">Flag</button>
      </div>

      <ul>
        {flag.map((fl,i) => (
          <li key={i}>
            {menit(fl).toString().padStart(2, "0")}:{detik(fl).toString().padStart(2, "0")}:
            {mili(fl).toString().padStart(3, "0")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
