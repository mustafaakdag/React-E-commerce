import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CategoryList from './examples/fetchSample/CategoryList';
import SupplierList from './examples/fetchSample/SupplierList';
import ProductList from './examples/fetchSample/ProductList';
import NotFound from './examples/routerSample/NotFound';
import SupplierDetail from './examples/fetchSample/SupplierDetail';
import CategoryListView from './admin/views/category/CategoryListView';
import AddCategoryView from './admin/views/category/AddCategoryView';
import ProductListView from './admin/views/product/ProductListView';
import AddProductView from './admin/views/product/AddProductView';
import HomeView from './site/views/home/HomeView';
import { CartProvider } from './store/CartContext';
import CartView from './site/views/cart/CartView';
import OrderView from './site/views/order/OrderView';
import OrderSuccessView from './site/views/order/OrderSuccessView';



ReactDOM.render(
  
  <CartProvider>


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<HomeView />} />
      
      <Route path="/cart" element={<CartView />} />
      <Route path="/order" element={<OrderView />} />
      <Route path="/ordersuccess" element={<OrderSuccessView />} />



      <Route path="/admin/addproduct" element={<AddProductView />} />
      <Route path="/admin/products" element={<ProductListView />} />
      <Route path="/admin/categories" element={<CategoryListView />} />
      <Route path="/admin/addcategory" element={<AddCategoryView />} />

      <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </BrowserRouter>

  </CartProvider>
  ,
  document.getElementById('root')
);


