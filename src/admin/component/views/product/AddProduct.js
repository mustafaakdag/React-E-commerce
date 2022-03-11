import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Upload, message } from 'antd';
import { baseService } from '../../../../service/baseService'
import { useNavigate } from 'react-router-dom';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';



const { Option } = Select;

function AddProduct() {

    const [categories, setCategories] = useState([]);


    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const navigate = useNavigate();

    const onFinish = (value) => {

        baseService.add("/product", value)
            .then((data) => {
                navigate('/admin/products');
            })

    }

    useEffect(() => {

        baseService.getAll('/category')
            .then((data) => {
                setCategories(data);
            })

    }, [])


    return (
        <>
            <Form
                name="basic"
                onFinish={onFinish}
            >

                <Form.Item
                    label="Category"
                    name="categories"
                >
                    <Select mode="multiple" style={{ width: 200 }} onChange={handleChange}>

                        {
                            categories && categories.map((item) => {

                                return (<Option value={item._id}>{item.name}</Option>)

                            })
                        }


                    </Select>

                </Form.Item>



                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your product name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Code"
                    name="code"
                >
                    <Input />
                </Form.Item>

                <Form.Item name="stockStatus" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Stock Status</Checkbox>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    )



}

export default AddProduct
