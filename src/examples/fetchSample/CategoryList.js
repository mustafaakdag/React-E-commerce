import React, { useEffect, useState } from 'react'

function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
       
        fetch("https://northwind.vercel.app/api/categories")
        .then((res) => res.json())
        .then((data) => {
            
            setCategories(data);
        })

    }, [])


    return (
        <>
            <ul>
                {
                 categories && categories.map((item,key) => {

                        return (<li>{item.name}</li>)

                    })
                }
            </ul>
        </>
    )
}

export default CategoryList
