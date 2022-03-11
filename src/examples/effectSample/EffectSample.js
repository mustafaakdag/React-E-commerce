import React, { useState, useEffect } from 'react'

function EffectSample() {

    const [sayac, setSayac] = useState(0);
    console.log('1');

    useEffect(() => {
      
        console.log('2');

    }, [])

    return (
        <div>
            <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Arttir</button>
        </div>
    )
}

export default EffectSample
