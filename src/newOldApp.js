import React, { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    return (
        <div>
            <Steps />
            <Steps />
        </div>
    );
}

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrev() {
        step <= 1 ? setStep(1) : setStep(step - 1);
    }

    function handleNext() {
        step >= 3 ? setStep(3) : setStep(step + 1);
        // Good practice is using a callback function to update the state based on the previous state, like so:
        // if (step < 3) {
        //     setStep((s) => s + 1);
        // }
    }

    return (
        <div>
            <button
                className="close"
                onClick={() => setIsOpen((isOp) => !isOp)}
            >
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step > 0 ? "active" : ""}>1</div>
                        <div className={step > 1 ? "active" : ""}>2</div>
                        <div className={step > 2 ? "active" : ""}>3</div>
                    </div>

                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handlePrev}
                        >
                            Prev
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
