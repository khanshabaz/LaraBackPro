import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "../features/Product-List/productSlice";
import authReducer from "../features/auth/AuthSlice";
import cartReducer from "../features/cart/CartSlice"
import orderReducer from "../features/order/orderSlice"
import userReducer from "../features/user/userSlice"
 const store=configureStore({
  reducer:{
    product:productSlice,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    user: userReducer,
  }
})

export default store