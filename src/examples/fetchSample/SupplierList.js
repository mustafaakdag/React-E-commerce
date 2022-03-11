import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function SupplierList() {

    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                setSuppliers(data);
            })
    }, [])

    const clearList = () => {
        setSuppliers([]);

    }

    const removeItem = (supplierId) => {
        let newSuppliers = suppliers.filter(q => q.id != supplierId);
        setSuppliers([...newSuppliers]);
    }

    return (
        <>
            <button onClick={() => clearList()}>Clear List</button>

            <table>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>City</td>
                    <td>Remove</td>
                    <td>Detail</td>
                </tr>


                {
                    suppliers && suppliers.map((item, key) => {
                        return (<tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactTitle}</td>
                            <td>{item.address.city}</td>
                            <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                            {/* <td><a href={"/Suppliers/" + item.id}>Detail</a></td> */}
                            <td><Link to={"/suppliers/" + item.id}>Detail</Link></td>
                        </tr>)
                    })
                }

            </table>
        </>
    )
}

export default SupplierList
