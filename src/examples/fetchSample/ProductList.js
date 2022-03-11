import React, { useEffect, useState } from 'react'


function ProductList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

            fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })

    }, [])


    return (
        <>

            {
                loading == true ? <h1>loading..</h1> : 
                
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Stock</td>
                    </tr>
                    {
                        products && products.map((item, key) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.unitsInStock}</td>
                                </tr>
                            )
                        })
                    }
                </table>

            }


        </>
    )
}

export default ProductList
