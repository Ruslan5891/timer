import React from "react";

function BtnComponent(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>
                Start/Stop
            </button>

            <div>
                <button className="stopwatch-btn stopwatch-btn-red" onDoubleClick={props.wait}>
                    Wait
                </button>
            </div>

            <div>
                <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default BtnComponent;
