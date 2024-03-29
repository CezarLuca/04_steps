import React, { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    // const step = 1;
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    // const [test, setTest] = useState({ name: "Cezar", age: 27 });

    // const arr = useState(1);
    // console.log(arr);

    function handlePrev() {
        // console.log("Prev");
        step <= 1 ? setStep(1) : setStep(step - 1);

        //! BAD PRACTICE
        // test.name = "Luca";
        // CORRECT WAY:
        // setTest({ name: "Luca" });
    }

    function handleNext() {
        // console.log("Next");
        step >= 3 ? setStep(3) : setStep(step + 1);

        // test.name = "Zoe";
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>
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
                        {/* {test.name} */}
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
        </>
    );
}
