import React, { useState } from 'react'

function StateSample3() {

    let metalGroups = [
        {
            id:1,
            name: 'Iron Maiden',
            description: 'Bruce Dickinson çok enteresan adam..Steve harris gitaristi',
            country: 'UK'
        },
        {
            id:2,
            name: 'Gojira',
            description: 'Fransa dan böyle bir grup çıkması da enteresan ',
            country: 'France'
        },
        {
            id:3,
            name: 'Furtherial',
            description: 'On numara grup',
            country: 'Turkey'
        },
    ]

    const [groups, setGroups] = useState(metalGroups)


    const deleteGroup = (id) => {

        let newGroups = groups.filter(q => q.id != id);

        console.log(newGroups);
        setGroups(newGroups);
    }

    return (
        <>
            <ul>
                {
                    groups && groups.map((item, key) => {
                        return (
                            <>
                                <li>{item.name}</li>
                                <button onClick={() => deleteGroup(item.id)}>Delete</button>
                            </>

                        )
                    })
                }
            </ul>

        </>
    )
}

export default StateSample3
