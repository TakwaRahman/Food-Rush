
import {
    FaCartShopping,
    FaTrash,
    FaMinus,
    FaPlus,
    FaArrowLeft,
    FaTruckFast,
    FaClock,
    FaShieldHalved,
    FaStar,
    FaTag
} from "react-icons/fa6";

const Cart = () => {

    // Demo cart data
    const cartItems = [
        {
            id: 1,
            name: "Classic Beef Burger",
            restaurant: "Food Palace",
            price: 8,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        }
    ];

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const deliveryFee = 3;
    const discount = 5;

    const total = subtotal + deliveryFee - discount;


    return (
        <div className="bg-gray-50 min-h-screen py-6 sm:py-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */}

                <div className="mb-6 sm:mb-8">

                    <div className="flex items-center gap-3 sm:gap-4">

                        <FaCartShopping className="text-3xl sm:text-4xl" />

                        <h1 className="text-3xl sm:text-4xl font-bold">
                            My Cart
                        </h1>

                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 mt-3 text-sm sm:text-base text-gray-500">

                        <span>Home</span>

                        <span>›</span>

                        <span>Cart</span>

                    </div>

                </div>


                {/* ================= MAIN GRID ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                    {/* ================= CART SECTION ================= */}

                    <div className="lg:col-span-2">

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                            {
                                cartItems.map(item => (

                                    <div
                                        key={item.id}
                                        className="p-4 sm:p-6 border-b border-gray-200"
                                    >

                                        {/* ================= FOOD ITEM ================= */}

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">

                                            {/* Food Image */}

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-48 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-xl"
                                            />


                                            {/* Food Information */}

                                            <div className="flex-1 min-w-0">

                                                <h2 className="text-lg sm:text-xl font-bold truncate">

                                                    {item.name}

                                                </h2>

                                                <p className="text-primary font-medium mt-1">

                                                    {item.restaurant}

                                                </p>

                                                <p className="text-gray-500 mt-1">

                                                    ${item.price.toFixed(2)}

                                                </p>

                                            </div>


                                            {/* ================= MOBILE CONTROLS ================= */}

                                            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">

                                                {/* Quantity */}

                                                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">

                                                    <button
                                                        className="px-3 py-2 hover:bg-gray-100 active:bg-gray-200"
                                                    >
                                                        <FaMinus className="text-sm" />
                                                    </button>

                                                    <span className="px-4 font-semibold">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        className="px-3 py-2 hover:bg-gray-100 active:bg-gray-200"
                                                    >
                                                        <FaPlus className="text-sm" />
                                                    </button>

                                                </div>


                                                {/* Item Total */}

                                                <div className="text-lg sm:text-xl font-bold text-primary min-w-[70px] text-right">

                                                    $
                                                    {(item.price * item.quantity).toFixed(2)}

                                                </div>


                                                {/* Delete */}

                                                <button
                                                    className="text-gray-400 hover:text-red-500 transition text-lg sm:text-xl"
                                                >

                                                    <FaTrash />

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))
                            }


                            {/* ================= CONTINUE SHOPPING ================= */}

                            <div className="p-4 sm:p-6">

                                <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white rounded-xl w-full sm:w-auto">

                                    <FaArrowLeft />

                                    Continue Shopping

                                </button>

                            </div>

                        </div>


                        {/* ================= PROMO ================= */}

                        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 sm:p-6 mt-5 sm:mt-6">

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">


                                {/* Promo Information */}

                                <div className="flex items-center gap-3 sm:gap-4">

                                    <div className="bg-orange-100 text-primary p-3 sm:p-4 rounded-xl text-xl sm:text-2xl shrink-0">

                                        <FaTag />

                                    </div>

                                    <div>

                                        <h3 className="text-lg sm:text-xl font-bold">

                                            Have a Promo Code?

                                        </h3>

                                        <p className="text-sm sm:text-base text-gray-500">

                                            Enter your code to get discounts on your order

                                        </p>

                                    </div>

                                </div>


                                {/* Promo Input */}

                                <div className="flex w-full lg:w-auto">

                                    <input
                                        type="text"
                                        placeholder="Enter promo code"
                                        className="input bg-white border-gray-300 rounded-r-none w-full lg:w-52 min-w-0"
                                    />

                                    <button className="btn bg-primary text-white border-primary rounded-l-none hover:bg-orange-600">

                                        Apply

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= ORDER SUMMARY ================= */}

                    <div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-7 lg:sticky lg:top-5">

                            <h2 className="text-2xl font-bold mb-6 sm:mb-7">

                                Order Summary

                            </h2>


                            {/* Subtotal */}

                            <div className="flex justify-between gap-4 mb-5">

                                <span className="text-gray-600">

                                    Subtotal ({cartItems.length} items)

                                </span>

                                <span className="font-semibold whitespace-nowrap">

                                    ${subtotal.toFixed(2)}

                                </span>

                            </div>


                            {/* Delivery Fee */}

                            <div className="flex justify-between gap-4 mb-5">

                                <span className="text-gray-600">

                                    Delivery Fee

                                </span>

                                <span className="font-semibold">

                                    ${deliveryFee.toFixed(2)}

                                </span>

                            </div>


                            {/* Discount */}

                            <div className="flex justify-between gap-4 mb-6">

                                <span className="text-gray-600">

                                    Discount

                                </span>

                                <span className="text-green-600 font-semibold">

                                    -${discount.toFixed(2)}

                                </span>

                            </div>


                            {/* Total */}

                            <div className="border-t pt-5">

                                <div className="flex justify-between items-center gap-4">

                                    <span className="text-xl font-bold">

                                        Total

                                    </span>

                                    <span className="text-2xl font-bold text-primary">

                                        ${total.toFixed(2)}

                                    </span>

                                </div>

                            </div>


                            {/* Checkout Button */}

                            <button className="btn w-full bg-primary text-white border-primary hover:bg-orange-600 mt-7 text-base sm:text-lg rounded-xl">

                                Proceed to Checkout

                            </button>


                            {/* ================= FEATURES ================= */}

                            <div className="border-t mt-7 pt-6 space-y-5">

                                <div className="flex items-center gap-4">

                                    <FaTruckFast className="text-green-600 text-xl shrink-0" />

                                    <span className="text-sm sm:text-base">

                                        Free delivery on orders above $30

                                    </span>

                                </div>


                                <div className="flex items-center gap-4">

                                    <FaClock className="text-green-600 text-xl shrink-0" />

                                    <span className="text-sm sm:text-base">

                                        30 mins fast delivery

                                    </span>

                                </div>


                                <div className="flex items-center gap-4">

                                    <FaShieldHalved className="text-green-600 text-xl shrink-0" />

                                    <span className="text-sm sm:text-base">

                                        Safe & secure payment

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM FEATURES ================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 bg-white border border-gray-200 rounded-2xl mt-8 sm:mt-10 p-5 sm:p-7">

                    {/* Feature 1 */}

                    <div className="flex items-center gap-4">

                        <FaStar className="text-2xl shrink-0" />

                        <div>

                            <h3 className="font-bold">

                                100+ Top Restaurants

                            </h3>

                            <p className="text-gray-500 text-sm">

                                Best food near you

                            </p>

                        </div>

                    </div>


                    {/* Feature 2 */}

                    <div className="flex items-center gap-4">

                        <FaTruckFast className="text-2xl shrink-0" />

                        <div>

                            <h3 className="font-bold">

                                Fast Delivery

                            </h3>

                            <p className="text-gray-500 text-sm">

                                On time delivery

                            </p>

                        </div>

                    </div>


                    {/* Feature 3 */}

                    <div className="flex items-center gap-4">

                        <FaTag className="text-2xl shrink-0" />

                        <div>

                            <h3 className="font-bold">

                                Best Offers

                            </h3>

                            <p className="text-gray-500 text-sm">

                                Amazing discounts

                            </p>

                        </div>

                    </div>


                    {/* Feature 4 */}

                    <div className="flex items-center gap-4">

                        <FaShieldHalved className="text-2xl shrink-0" />

                        <div>

                            <h3 className="font-bold">

                                Secure Payment

                            </h3>

                            <p className="text-gray-500 text-sm">

                                100% safe & secure

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;
