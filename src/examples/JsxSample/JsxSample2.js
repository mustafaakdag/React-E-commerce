import React from 'react'

function JsxSample2() {

    let hello = () => {
        alert("hello!!!")
    }

    return (
        <>
            <button onClick={hello}>Hello Jsx</button>
            <button onClick={() => hello()}>Hello Jsx-2</button>
        </>
    )
}

export default JsxSample2
