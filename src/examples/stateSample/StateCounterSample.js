import React, {useState} from 'react'

function StateCounterSample() {

    console.log('Component rendered!!');

    let [sayac, setSayac] = useState(1)

    const incrase = () => {

        setSayac(5);
        // console.log('SAYAÇ',sayac);
    }

    return (
        <>
            <h1>{sayac}</h1>
            <button onClick={() => incrase()}>Arttır</button>
        </>
    )
}

export default StateCounterSample
