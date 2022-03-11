import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SupplierDetail() {

    let { id }  = useParams();

    const [supplier, setSupplier] = useState({})

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers/" + id)
        .then(res => res.json())
        .then((data) => {
            setSupplier(data);
        })

    }, [])


    return (
        <>
            <p>Company Name: {supplier.companyName}</p>
            <p>Contact Title: {supplier.contactTitle}</p>
            <p>Contact Name: {supplier.contactName}</p>
        </>
    )
}

export default SupplierDetail
