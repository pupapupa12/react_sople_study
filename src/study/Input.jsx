import React, { useState } from "react";

const Input = () => {
    const [num, setNum] = useState(0);

    console.log(num);

    //setNum이라는 num을 바꾸는 함수를 실행하겠다.
    //()=>{setNum()}

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log("submit");
                }}
            >
                <input
                    type="text"
                    value={num}
                    onChange={(event) => {
                        console.log(event);
                        setNum(event.target.value);
                    }}
                />

                <button>submit</button>
                <h1>{num}</h1>
            </form>
        </>
    );
};

//Component는 return 하나의 틀만 리턴 할 수 있음

export default Input;
