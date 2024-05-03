import React, { useState } from "react";

const Form = () => {
    const [num, setNum] = useState(0);
    const [age, setAge] = useState(0);
    const [adult, setAdult] = useState("");
    console.log();

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setAge(2024 - num);
                    if (2024 - num <= 18) {
                        setAdult("미성년자");
                    } else {
                        setAdult("성인");
                    }
                }}
            >
                <input
                    type="number"
                    value={num}
                    max={2024}
                    min={1900}
                    onChange={(event) => {
                        console.log(event);
                        setNum(event.target.value);
                    }}
                />

                <button>submit</button>
                <h1>{age}</h1>
                <h2>{adult}</h2>
            </form>
        </>
    );
};

export default Form;
