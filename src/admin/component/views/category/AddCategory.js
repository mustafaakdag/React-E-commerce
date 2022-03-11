import React from 'react'
import { Form, Input, Button } from 'antd';
import {baseService} from '../../../../service/baseService'
import { useNavigate } from 'react-router-dom';


function AddCategory() {

    const navigate = useNavigate();

    const onFinish = (value) => {

        baseService.add("/category",value)
        .then((data) => {
          navigate('/');
        })
    
    }


    return (
        <>
            <Form
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your category name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
      >
        <Input />
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

export default AddCategory
