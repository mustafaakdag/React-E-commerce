import React from 'react'

function CategoryItem(props) {

    return (
        <>
            <span>{props.title}</span>
            <p>{props.description}</p>
            <span>{props.link}</span>
        </>
    )
}

export default CategoryItem
