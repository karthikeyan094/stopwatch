import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isRunning,setIsRunning] = useState(false);
  const [timing,setTiming] = useState(0);
const [tid,setTid] = useState("");
  const formatTime = ()=>{
    let min = Math.floor(timing/60);
    let sec = timing%60;
    return `${min}:${sec>9?sec:"0"+sec}`;
  }

  const handleReset = ()=>{
    setIsRunning(false);
    setTiming(0);
  }
  const handleTime = ()=>{
    setIsRunning((prev)=>!prev);
  }
  useEffect(()=>{
    let tid;
    if(isRunning){
    tid = setInterval(()=>{
      setTiming((prev)=> prev+1);
    },1000);
    setTid(tid);
    }else{
      clearInterval(tid);
    }
    return ()=>{
      clearInterval(tid);
    }
  },[isRunning])
  
  return (
    <div >
     <h1>Stopwatch</h1>
     <p>Time: {formatTime()}</p>
     <button onClick={handleTime}>{!isRunning?"Start":"Stop"}</button>
     <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
