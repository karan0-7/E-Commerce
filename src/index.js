import React from 'react';
import ReactDOM from 'react-dom/client';
import Home_Layout,{loader as Home_Layout_loader} from './components/HomePage Scripts/Home_Layout';
import HomePage,{loader as HomePage_loader} from './components/HomePage Scripts/HomePage';
import Sign_Up,{action as SignUpAction} from './components/Login Scripts/Sign_Up';
import SignIn_Username,{action as SignInAction} from './components/Login Scripts/SignIn_Username';
import Products,{loader as ProductsLoader} from './components/Product Scripts/Products';
import Product_info,{loader as ProductInfoReviewLoader} from './components/Product Scripts/Product_info';
import {action as HeaderAction} from './components/HomePage Scripts/Header'
import GenerateCart,{loader as CartLoader} from './components/Cart Scripts/GenerateCart';
import Account from './components/Account Scripts/Account';
import Account_security from './components/Account Scripts/Account_security';
import Account_addresses,{loader as Account_addresses_loader} from './components/Account Scripts/Address/Account_addresses';
import Add_address,{action as add_address_action} from './components/Account Scripts/Address/Add_address';
import Wishlist,{loader as WishlistLoader,action as WishlistAction} from './components/Wishlist Scripts/Wishlist';
import Orders,{loader as OrderLoader} from './components/Orders Scripts/Orders';
import ProductReview,{action as ProductReviewAction,loader as ProductReviewLoader} from './components/Product Scripts/ProductReview';

import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Home_Layout />} loader={Home_Layout_loader} >
      <Route index  element={<HomePage />} loader={HomePage_loader} />
      <Route path='signUp' element={<Sign_Up />} action={SignUpAction}/>
      <Route path='signIn' element={< SignIn_Username/>} action={SignInAction} />
      <Route path="/:category" element={< Products/>} loader={ProductsLoader}/>
      <Route path='/:category/:id' element={<Product_info />} loader={ProductInfoReviewLoader}/> 
      <Route path='cart' element={< GenerateCart />} loader={CartLoader} />
      <Route path='account' element={<Account />} />
      <Route path='login_security' element={<Account_security />} />
      <Route path='address' element={<Account_addresses />} loader={Account_addresses_loader} />
      <Route path='add_address' element={<Add_address />} action={add_address_action}/>
      <Route path='wishlist' element={<Wishlist />} loader={WishlistLoader} action={WishlistAction} />
      <Route path='orders' element={<Orders />} loader={OrderLoader}/>
      <Route path=':category/:id/productReview' element={< ProductReview/>} loader={ProductReviewLoader} action={ProductReviewAction} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />) 


