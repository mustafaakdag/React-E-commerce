import { Button, Card } from 'antd'
import React, { useContext } from 'react'
import CartContext from '../../../store/CartContext'
import { InputNumber } from 'antd';
import { setCartToLocalStorage } from '../../../utils/storageHelper/CartStorageHelper';
import { useNavigate } from 'react-router-dom';


function CartView() {

    const navigate = useNavigate();
    
    const { cart, setCart } = useContext(CartContext);


    const removeCartItem = (id) => {
        let newCartItems = cart.filter(q => q._id != id);

        setCart([...newCartItems])
        setCartToLocalStorage([...newCartItems]);
    }


    const quantityChange = (values, id) => {

            let cartProduct = cart.find(q => q._id == id);
            cartProduct.quantity = values;
    
            setCart([...cart])
            setCartToLocalStorage([...cart]);

    }


    const goToOrderPage = () => {
        navigate('/order')
    }

    return (
        <>
            {
                cart && cart.map((item,key) => {
                    return (
                        <Card key={key} title={item.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                        <InputNumber min={1} max={10} defaultValue={item.quantity} onChange={(e) => quantityChange(e, item._id)} />
                        <p><Button danger onClick={() => removeCartItem(item._id)}>Remove</Button></p>
                         </Card>
                    )
                })
            }

<Button type="primary" onClick={() => goToOrderPage()}>Order Now!</Button>
        </>
    )
}

export default CartView
