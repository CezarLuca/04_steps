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
            <StepMessage step={1}>
                <p>Pass in content</p>
                <p>✌️</p>
            </StepMessage>
            <Steps />
            <StepMessage step={2}>
                <p>Read children prop</p>
                <p>😎</p>
            </StepMessage>
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

                    <StepMessage step={step}>
                        {messages[step - 1]}
                        <div className="buttons">
                            <Button
                                backgroundColor={"#e7e7e7"}
                                textColor={"#333"}
                                onClick={() =>
                                    alert(`Learn how to ${messages[step - 1]}`)
                                }
                            >
                                {" "}
                                Learn how{" "}
                            </Button>
                        </div>
                    </StepMessage>

                    <div className="buttons">
                        <Button
                            textColor={"#fff"}
                            backgroundColor={"#7950f2"}
                            onClick={handlePrev}
                        >
                            <span>⬅️</span> Prev
                        </Button>
                        <Button
                            textColor={"#fff"}
                            backgroundColor={"#7950f2"}
                            onClick={handleNext}
                        >
                            Next <span>➡️</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}

function Button({ textColor, backgroundColor, onClick, children }) {
    return (
        <button
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
