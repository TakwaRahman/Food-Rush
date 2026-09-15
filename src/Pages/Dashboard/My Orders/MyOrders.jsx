import { useQuery } from "@tanstack/react-query";
import {
    FaBoxOpen,
    FaClock,
    FaCreditCard,
    FaMoneyBillWave,
} from "react-icons/fa";

import useAuth from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Component/Loading/Loading";


const MyOrders = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    // =========================
    // Get My Orders
    // =========================
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ["orders", user?.email],

        queryFn: async () => {
            const res = await axiosSecure.get(
                `/orders?email=${user.email}`
            );

            return res.data;
        },

        enabled: !!user?.email,
    });


    // =========================
    // Loading
    // =========================
    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }


    return (

        <div className="bg-gray-50 min-h-screen py-8">

            <div className="max-w-6xl mx-auto px-4">


                {/* =========================
                    PAGE HEADER
                ========================= */}

                <div className="mb-8">

                    <div className="flex items-center gap-3">

                        <div className="bg-orange-100 p-3 rounded-xl">

                            <FaBoxOpen className="text-orange-500 text-2xl" />

                        </div>


                        <div>

                            <h2 className="text-3xl font-bold text-gray-800">
                                My Orders
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Track your orders and payment information
                            </p>

                        </div>

                    </div>

                </div>



                {/* =========================
                    NO ORDER
                ========================= */}

                {orders.length === 0 && (

                    <div className="bg-white rounded-2xl p-10 text-center shadow-sm">

                        <FaBoxOpen className="text-5xl text-gray-300 mx-auto mb-4" />

                        <h3 className="text-xl font-semibold text-gray-700">
                            No Orders Yet
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Your orders will appear here after payment.
                        </p>

                    </div>

                )}



                {/* =========================
                    ORDERS
                ========================= */}

                <div className="space-y-6">

                    {orders.map((order) => {


                        // Total quantity
                        const totalQuantity = order.items?.reduce(
                            (total, item) =>
                                total + Number(item.quantity || 1),
                            0
                        );


                        return (

                            <div
                                key={order._id}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                            >


                                {/* =========================
                                    ORDER HEADER
                                ========================= */}

                                <div className="p-5 md:p-6 border-b border-gray-200">

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">


                                        <div>

                                            <p className="text-sm text-gray-500">
                                                Order ID
                                            </p>

                                            <h3 className="font-bold text-gray-800 break-all">
                                                #{order._id}
                                            </h3>


                                            <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">

                                                <FaClock />

                                                {order.orderedAt
                                                    ? new Date(
                                                        order.orderedAt
                                                    ).toLocaleString()
                                                    : "Date unavailable"
                                                }

                                            </p>

                                        </div>



                                        {/* Order Status */}

                                        <div>

                                            <p className="text-sm text-gray-500 mb-2">
                                                Order Status
                                            </p>


                                            <span
                                                className={`
                                                    px-4 py-2
                                                    rounded-full
                                                    text-sm
                                                    font-semibold
                                                    capitalize

                                                    ${
                                                        order.orderStatus === "delivered"
                                                            ? "bg-green-100 text-green-600"

                                                            : order.orderStatus === "cancelled"
                                                            ? "bg-red-100 text-red-600"

                                                            : order.orderStatus === "preparing"
                                                            ? "bg-yellow-100 text-yellow-600"

                                                            : "bg-orange-100 text-orange-600"
                                                    }
                                                `}
                                            >

                                                {order.orderStatus}

                                            </span>

                                        </div>

                                    </div>

                                </div>



                                {/* =========================
                                    FOOD ITEMS
                                ========================= */}

                                <div className="p-5 md:p-6">

                                    <h3 className="font-semibold text-gray-800 mb-5">
                                        Ordered Foods
                                    </h3>


                                    <div className="space-y-5">


                                        {order.items?.map((item, index) => (

                                            <div
                                                key={index}
                                                className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0"
                                            >


                                                {/* FOOD IMAGE */}

                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-48 sm:w-24 sm:h-24 rounded-xl object-cover"
                                                />


                                                {/* FOOD INFORMATION */}

                                                <div className="flex-1">

                                                    <h4 className="text-lg font-bold text-gray-800">
                                                        {item.name}
                                                    </h4>


                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Quantity: {item.quantity}
                                                    </p>


                                                    <p className="text-sm text-gray-500">
                                                        Price: ৳{item.price}
                                                    </p>


                                                </div>


                                                {/* ITEM TOTAL */}

                                                <div className="sm:text-right">

                                                    <p className="text-sm text-gray-500">
                                                        Item Total
                                                    </p>

                                                    <p className="text-xl font-bold text-orange-500">

                                                        ৳
                                                        {
                                                            (
                                                                Number(item.price) *
                                                                Number(item.quantity || 1)
                                                            ).toFixed(2)
                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>



                                {/* =========================
                                    ORDER SUMMARY
                                ========================= */}

                                <div className="px-5 md:px-6 pb-6">

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


                                        {/* TOTAL QUANTITY */}

                                        <div className="bg-gray-50 rounded-xl p-4">

                                            <p className="text-sm text-gray-500">
                                                Total Quantity
                                            </p>

                                            <p className="text-2xl font-bold text-gray-800 mt-1">
                                                {totalQuantity}
                                            </p>

                                        </div>



                                        {/* PAYMENT */}

                                        <div className="bg-gray-50 rounded-xl p-4">

                                            <div className="flex items-center gap-2">

                                                <FaCreditCard className="text-orange-500" />

                                                <p className="text-sm text-gray-500">
                                                    Payment
                                                </p>

                                            </div>


                                            <p className="font-semibold capitalize mt-1">
                                                {order.paymentMethod}
                                            </p>


                                            <p
                                                className={`
                                                    text-sm
                                                    font-semibold
                                                    capitalize
                                                    ${
                                                        order.paymentStatus === "paid"
                                                            ? "text-green-600"
                                                            : "text-yellow-600"
                                                    }
                                                `}
                                            >

                                                {order.paymentStatus}

                                            </p>

                                        </div>



                                        {/* TOTAL AMOUNT */}

                                        <div className="bg-orange-50 rounded-xl p-4">

                                            <div className="flex items-center gap-2">

                                                <FaMoneyBillWave className="text-orange-500" />

                                                <p className="text-sm text-gray-500">
                                                    Total Amount
                                                </p>

                                            </div>


                                            <p className="text-2xl font-bold text-orange-500 mt-1">

                                                ৳{Number(order.total).toFixed(2)}

                                            </p>

                                        </div>

                                    </div>



                                    {/* =========================
                                        PAYMENT SUMMARY
                                    ========================= */}

                                    <div className="border-t mt-6 pt-6">

                                        <h4 className="font-semibold text-gray-800 mb-4">
                                            Payment Summary
                                        </h4>


                                        <div className="space-y-3 text-sm">


                                            {/* SUBTOTAL */}

                                            <div className="flex justify-between">

                                                <span className="text-gray-500">
                                                    Subtotal
                                                </span>

                                                <span>
                                                    ৳{Number(order.subtotal).toFixed(2)}
                                                </span>

                                            </div>



                                            {/* DISCOUNT */}

                                            <div className="flex justify-between">

                                                <span className="text-gray-500">
                                                    Discount
                                                </span>

                                                <span className="text-green-600">
                                                    - ৳{Number(order.discount).toFixed(2)}
                                                </span>

                                            </div>



                                            {/* DELIVERY */}

                                            <div className="flex justify-between">

                                                <span className="text-gray-500">
                                                    Delivery Fee
                                                </span>

                                                <span>
                                                    ৳{Number(order.deliveryFee).toFixed(2)}
                                                </span>

                                            </div>



                                            {/* TOTAL */}

                                            <div className="border-t pt-3 flex justify-between text-lg font-bold">

                                                <span>
                                                    Total
                                                </span>

                                                <span className="text-orange-500">
                                                    ৳{Number(order.total).toFixed(2)}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>

    );
};


export default MyOrders;