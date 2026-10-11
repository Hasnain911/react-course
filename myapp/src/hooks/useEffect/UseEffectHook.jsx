// import React from 'react'
import { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setTime(now);

      console.log('Interval running:', intervalId);
    }, 1000);

    console.log('Interval created:', intervalId);

    return () => clearInterval(intervalId);
  },[]);

  return <div>Time: {time}</div>;
};

export default UseEffectHook;


// 1. [] — Empty dependency array

// . Effect initial mount par run hota hai.
// . State change hone par re-render ho, tab effect dobara run nahi hota.
// . Cleanup component unmount hone par run hota hai.

// 2. No dependency array

// . Effect har render ke baad run hota hai.
// . Agar state change se re-render ho, effect dobara run hota hai.
// . Purana cleanup, effect ke next run se pehle execute hota hai.

// 3. [count] — Dependency array with a value

// . Effect initial mount par run hota hai.
// . Jab count ki value change hoti hai, effect dobara run hota hai.
// . Dobara effect run hone se pehle purana cleanup execute hota hai.

// 4. return () => clearInterval(intervalId)

// . return () => cleanup function banata hai.
// . clearInterval(intervalId) interval ko band karta hai.
// . React cleanup ko zaroorat par khud call karta hai: effect dobara run hone se pehle ya component unmount hone par.