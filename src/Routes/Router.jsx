import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AddFood from "../Pages/Home/AddFood/AddFood";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AddRestaurents from "../Pages/Home/AddRestaurents/AddRestaurents";
import Cart from "../Pages/Home/Cart/Cart";
import RestaurentsDetails from "../Pages/Home/RestaurentsDetails/RestaurentsDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import PaymentSucces from "../Pages/Dashboard/Payment/PaymentSucces";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../Pages/Dashboard/My Orders/MyOrders";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: 'add-restaurents',
                Component: AddRestaurents
            },
            {
                path: 'foods/:id',
                Component: FoodDetails
            },
            {
                path: 'restaurants/:id',
                Component: RestaurentsDetails
            },
            {
                path: 'cart',
                Component: Cart
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'payment-success',
                Component: PaymentSucces
            },
            {
                path: 'my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            }
        ]
    }
]);