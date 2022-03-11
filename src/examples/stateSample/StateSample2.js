import React, {useState} from 'react'

function StateSample2() {

    const [numbers, setNumbers] = useState([2,5,-11]);

    let addNumber = () => {

        var randomNumber = Math.floor(Math.random() * 1000);
        setNumbers([...numbers, randomNumber]);

    }


    return (
        <>
        <button onClick={() => addNumber()}>Add</button>
        <ul>
            {
                numbers.map((item,key) => (<li>{item}</li>))
            }
        </ul>
        </>
    )
}

export default StateSample2
