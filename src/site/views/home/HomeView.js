import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Modal } from 'antd';
import { baseService } from '../../../service/baseService';
import CartContext from '../../../store/CartContext';
import { setCartToLocalStorage } from '../../../utils/storageHelper/CartStorageHelper';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


function HomeView() {

    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)

    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {

        baseService.getAll('/product')
            .then((data) => {
                setProducts(data);
            })

    }, [])

    const addToCart = (item) => {

        //Bu ürün sepette var ise o ürünün sepetteki adedini arttırır. Eğer ürün yoksa sepete yeni ürün olarak ekler ( ve miktarını 1 girer)

        let product = cart.find(q => q._id == item._id);
        if (product != null) {
            product.quantity = product.quantity + 1
            setCart([...cart])
            setCartToLocalStorage([...cart]);
        }
        else {

            let newCartProduct = {
                _id: item._id,
                quantity: 1,
                price: item.price,
                name: item.name
            }
            setCartToLocalStorage([...cart, newCartProduct]);
            setCart([...cart, newCartProduct]);

        }

        setModalVisible(true)
    }


    const handleOk = () => {
        setModalVisible(false);
    }

    const handleCancel = () => {
        setModalVisible(false);
    }
    return (
        <>
            <div>
                Cart: {cart.length}
            </div>
            <Card title="Card Title">
                {
                    products && products.map((item, key) => {
                        return <Card.Grid key={key} style={gridStyle}>
                            <h4>{item.name}</h4>
                            <span>Categories: </span>
                            {
                                item.categories && item.categories.map((subCategory,cKey) => {
                                    return <span key={cKey}>{subCategory.name}</span>
                                })
                            }
                            <p>{item.price.toFixed(2)}</p>
                            <Button onClick={() => addToCart(item)} type='primary'>Add to cart</Button>
                        </Card.Grid>
                    })
                }

            </Card>

            <Modal title="İşlem" visible={modalVisible}  onOk={handleOk} onCancel={handleCancel}>
                <p>Ürün sepete başarıyla eklenmiştir</p>

            </Modal>
        </>
    )
}

export default HomeView
