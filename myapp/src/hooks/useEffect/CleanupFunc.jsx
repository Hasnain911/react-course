import { useState, useEffect } from 'react';

function CleanupFunc() {
  const [count, setCount] = useState(0);

    useEffect(() => {
     const intervalId =   setInterval(() => {
      //   console.log('Interval running:', intervalId);
  
        setCount(prev => prev + 1);
      }, 1000);
  
      // console.log('Interval created:', intervalId);
  
      return () => {
        clearInterval(intervalId);
        // console.log('Interval cleared:', intervalId);
      }
    },[]);
  // preferred one.
  // The empty dependency array [] ensures the effect runs only when the component mounts.
  // setInterval increments the count by 1 every second.
  // The cleanup function clears the interval when the component unmounts,
  // preventing memory leaks and unwanted interval callbacks.
  // In React StrictMode (development), cleanup also runs before the effect is set up again.



//   useEffect(() => {
//    const intervalId = setInterval(() => {
//       console.log('Interval running:', intervalId);

//       setCount(prev => prev + 1);
//     }, 1000);

//     console.log('Interval created:', intervalId);

//     // No cleanup function
//   },[]); // The effect runs when the component mounts. Without a cleanup function, the interval will continue running even after the component unmounts



//   useEffect(() => {
//    const intervalId =   setInterval(() => {
//       console.log('Interval running:', intervalId);

//       setCount(prev => prev + 1);
//     }, 1000);

//     console.log('Interval created:', intervalId);

//     // No cleanup function
//   });// No dependency array is provided, so the effect runs after every render.
// Each render creates a new interval.
// Without a cleanup function, previous intervals continue running,
// causing multiple intervals to update the count and potentially continue running after unmount. .



//   useEffect(() => {
//   const intervalId = setInterval(() => {
//     //   console.log('Interval running:', intervalId);

//       setCount(prev => prev + 1);
//     }, 20000);

//     console.log('Interval created:', intervalId);

//     return () => {
//       clearInterval(intervalId);
//       console.log('Interval cleared:', intervalId);
//     }
//   },[count]);

  console.log('Component rendered. Count:', count);



//    const intervalId = setInterval(() => {
//       console.log('Interval running:', intervalId);

//       setCount(prev => prev + 1);
//     }, 5000);// Without useEffect, this will create a new interval on every render, leading to multiple intervals running simultaneously.



  return (
  <h1>Count: {count}</h1>);
}

export default  CleanupFunc;