import React, { useContext } from 'react'
import { Button, Input, Form } from 'antd'
import CartContext from '../../../store/CartContext'
import { baseService } from '../../../service/baseService'
import { useNavigate } from 'react-router-dom'


function OrderForm() {

    let navigate = useNavigate();

    const {cart, setCart} = useContext(CartContext)

    const onFinish = async (values) => {

        var order = {
            cart: cart,
            name: values.name,
            address: values.address,
            phone : values.phone,
            email : values.email
        };

        await baseService.add('/order', order)
        .then((res) => {
            
            setCart([]);

            navigate("/ordersuccess")
        })



        // var order2 = new Object();
        // order2.cart = cart;
        // order2.name = values.name;
        // order2.address = values.address;
        // order2.phone = values.phone;

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
        label="EMail"
        name="email"
        rules={[{ required: true, message: 'Please input your email address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}

      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your address !' }]}

      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Checkout
        </Button>
      </Form.Item>

    </Form> 
        </>
    
    
    )
}

export default OrderForm
