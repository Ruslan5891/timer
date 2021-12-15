import React, { useState } from "react";
import DisplayComponent from "./components/Display";
import BtnComponent from "./components/Buttons";
import "./App.css";

function App() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
  
    const start = () => {
        if (status === 0 || status === 2) {
            run();
            setStatus(1);
            setInterv(setInterval(run, 10));
        }
        if (status === 1) {
            reset();
        }
    };

    let updatedMs = time.ms,
        updatedS = time.s,
        updatedM = time.m,
        updatedH = time.h;

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    const wait = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
    };

    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayComponent time={time} />
                    <BtnComponent status={status} reset={reset} wait={wait} start={start} />
                </div>
            </div>
        </div>
    );
}

export default App;
