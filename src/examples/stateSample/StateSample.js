import React from 'react'

function StateSample() {

    let name = "Parkway Drive";

    let changeName = () => {
        name = "Slipknot";
    }

    return (
        <>
            <h1 id='title'>{name}</h1>
            <button onClick={() => changeName()}>Change Name</button>
        </>
    )
}

export default StateSample
