import { Button, Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { baseService } from '../../../../service/baseService'



function ProductList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const removeProduct = (id) => {

        baseService.delete("/product", id)
            .then(() => {
                getAllProducts();
            })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Delete',
            dataIndex: '_id',
            key: '_id',
            render: (id) => <Button danger onClick={() => removeProduct(id)}> Delete </Button>
        },
    ];

    useEffect(() => {

        getAllProducts();

    }, [])


    const getAllProducts = () => {

        baseService.getAll("/product")
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })

    }


    return (
        <>
            <Spin tip="Loading..." spinning={loading}>


                <Table dataSource={products} columns={columns} />
            </Spin>
        </>
    )
}

export default ProductList
