import React, { useContext } from 'react'
import 'antd/dist/antd.css'
import { Badge, Layout, Menu } from 'antd';
import {
  Link,
  Outlet
} from "react-router-dom";
import Avatar from 'antd/lib/avatar/avatar';
import CartContext from './store/CartContext';



const { Header, Content, Footer } = Layout;

function App() {

  const {cart, setCart} = useContext(CartContext)


  return (
    <>
<Layout className="layout">
<Header>
  <div className="logo" />

  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
    <Menu.Item><Link to='/'>Home</Link></Menu.Item>
    <Menu.Item><Link to='/products'>Products</Link> </Menu.Item>
    <Menu.Item><Link to='/about'>About</Link> </Menu.Item>
    <Menu.Item><Link to='/cart' style={{color:'tomato'}}>Cart: {cart.length}</Link> </Menu.Item>

  </Menu>



</Header>
<Content style={{ padding: '0 50px' }}>
  <div className="site-layout-content">
    <Outlet></Outlet>
  </div>
</Content>
<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
    </>
  );
}

export default App;
