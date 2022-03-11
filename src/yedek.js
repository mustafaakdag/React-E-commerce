<Layout className="layout">
<Header>
  <div className="logo" />
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item>Home</Menu.Item>
    <Menu.Item>Products</Menu.Item>
    <Menu.Item><Link to='/admin/categories'>Categories</Link> </Menu.Item>
  </Menu>
</Header>
<Content style={{ padding: '0 50px' }}>
  <div className="site-layout-content">
    <Outlet></Outlet>
  </div>
</Content>
<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>