// # Timers App

// - Adding a Timers
// - Deleting a Timers
// - Play/Pause and Stop Timers

// # Meta Code

//added comments for better understanding of the code
// refined some functions as well as the UI on after going through the code post interview in order to enhance the User Experience

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Timer from "./Timer";

//Timer function for respective timers
// function Timer({ timer, updateTimer, onDelete }) {
//   const { id, time, running } = timer;

//   // as discussed in the interview, using useEffect so that I can use setInterval, which I am incrementing on every passing second (since it is the requirement of the Timer app functionality)
//   useEffect(() => {
//     let intervalId = null;
//     if (running) {
//       intervalId = setInterval(() => {
//         updateTimer(id, { time: time + 1, running: true });
//       }, 1000);
//     }

//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [running, time, id, updateTimer]);

//   //function for play / pause functionality of respective timers
//   const playPauseToggle = () => {
//     updateTimer(id, { time: time, running: !running });
//   };

//   //function for stop functionality of respective timers
//   const stopTimer = () => {
//     updateTimer(id, { time: 0, running: false });
//   };

//   //as discussed in the interview, used JS DATE object to extract current time
//   const timeFormat = () => {
//     const date = new Date(0);
//     date.setSeconds(time);
//     return date.toISOString().split("T")[1].substring(0, 8);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         border: "1px solid black",
//         borderRadius: "8px",
//         padding: "10px 20px",
//         marginBottom: "20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginBottom: "10px",
//         }}
//       >
//         {timeFormat()}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         <button
//           onClick={playPauseToggle}
//           className={`px-4 py-2 rounded-md ${
//             running
//               ? "bg-yellow-500 hover:bg-yellow-600"
//               : "bg-green-500 hover:bg-green-600"
//           } text-white font-semibold transition-colors`}
//         >
//           {running ? "PAUSE" : "PLAY"}
//         </button>
//         <button onClick={stopTimer}>STOP</button>
//         {/* could not create the delete button functionality in the interview, so adding it here */}
//         <button onClick={() => onDelete(id)}>DELETE</button>
//       </div>
//     </div>
//   );
// }

// //this is the main function, which renders the list of Timers in the 'numTimers' array initialised below.
// function TimerApp() {
//   const [numTimers, setNumTimers] = useState([]);
//   const [nextId, setNextId] = useState(1);

//   //function to add a new timer when I click on the ADD TIMER button
//   const addTimer = () => {
//     setNumTimers((prevTimers) => [
//       ...prevTimers,
//       {
//         id: nextId,
//         time: 0,
//         running: false,
//       },
//     ]);
//     setNextId((prevId) => prevId + 1);
//   };

//   // updateTimer function is the function which I wrote to keep up with the current time changes
//   // using this function as an addition for STOP/PLAY/PAUSE functionalities as well
//   const updateTimer = (id, newState) => {
//     setNumTimers((prevTimers) =>
//       prevTimers.map(
//         (timer) => (timer.id === id ? { ...timer, ...newState } : timer) //spreading the array so as to update the element which is being changed
//       )
//     );
//   };

//   // Delete function to remove respective timer. used ID to get the respective timer which needs to be deleted
//   const deleteTimer = (id) => {
//     setNumTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         marginBottom: "20px",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1 style={{ marginLeft: "30px" }}>TIMER APP</h1>
//       <div>
//         {/* mapping the timers array and using id as key so that react can identify which timer is updated */}
//         {numTimers.map((timer) => (
//           <Timer
//             key={timer.id}
//             timer={timer}
//             updateTimer={updateTimer}
//             onDelete={deleteTimer}
//           />
//         ))}
//       </div>
//       <button onClick={addTimer} style={{ width: "20%" }}>
//         ADD TIMER
//       </button>
//     </div>
//   );
// }

// export default TimerApp;

//All the requisites which were asked in the interview i.e.
// 1. adding timer
// 2. deleting timer
// 3. play/pause functionality
// have been covered in this CODE

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
