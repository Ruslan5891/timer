import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export default function App() {
    const world = "Hello world";
    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("stop");
    console.log(new Subject());

    useEffect(() => {
        const unsubscribe$ = new Subject();
        interval(1000)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => {
                if (status === "run") {
                    setSec((val) => val + 1000);
                }
            });
        return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
        };
    }, [status]);

    const start = () => {
        setStatus("run");
    };

    const stop = () => {
        setStatus("stop");
        setSec(0);
    };

    const reset = () => {
        setSec(0);
    };

    const wait = () => {
        setStatus("wait");
    };

    return (
        <div className="main-section">
            <p> {new Date(sec).toISOString().slice(11, 19)}</p>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                <button onDoubleClick={wait}>Wait</button>
            </div>
        </div>
    );
}
