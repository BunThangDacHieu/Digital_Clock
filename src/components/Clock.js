import { useState, useEffect} from 'react'

function Clock() {
    const[time, setTime] = useState(new Date().toLocaleTimeString());
        
    useEffect(()  =>{
        const intervalId = setInterval(() => {
            const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
        }, 1000);

        return() => clearInterval(intervalId);
    }, [])
    return (
      <div className='Clock'>
        {time}
      </div>
    );
  }
  
  export default Clock;
  