import { Button, Card, Input, Form } from 'antd'
import React, { useContext } from 'react'
import CartContext from '../../../store/CartContext'
import OrderForm from './OrderForm';

function OrderView() {
    

    const { cart } = useContext(CartContext);

    let totalPrice = 0;


    cart.forEach((item) => {
        totalPrice = totalPrice + (item.quantity * item.price);
    })

    let totalTax = totalPrice * 0.18;


    
    
    return (
        <>
        <ul>
            {
                cart && cart.map((item,key) => {
                    return (<li>{item.name} * {item.quantity} = {(item.quantity * item.price).toFixed(2)}</li>)
                })
            }
        </ul>
               <Card title='Order' style={{ width: 300 }}>
                        <p>Total Price: {totalPrice.toFixed(2)} </p>
                        <p>Tax: {totalTax.toFixed(2)}</p>
                </Card>

    <OrderForm></OrderForm>
        </>
    )
}

export default OrderView
