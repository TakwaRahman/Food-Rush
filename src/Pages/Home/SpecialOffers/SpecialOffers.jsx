import {
    FaArrowRight,
    FaCalendarDays,
    FaGift,
    FaPercent,
    FaTag,
    FaTruckFast,
} from "react-icons/fa6";

import burgerImg from '../../../assets/pngtree-burger-and-fries-delicious-fast-food-combo-transparent-background-png-image_13279170.png';
import pizzaImg from '../../../assets/pngtree-premium-transparent-pizza-for-hotel-or-restaurent-menu-png-image_13272565.png';
import saladImg from '../../../assets/pngtree-grilled-chicken-breast-with-colorful-salad-png-image_19404887.png';

const SpecialOffers = () => {

    const offers = [
        {
            id: 1,
            discount: "20% OFF",
            title: "ON ALL BURGERS",
            description: "Indulge in our best burgers at a special price!",
            code: "BURGER20",
            validUntil: "30 May 2026",
            image: burgerImg,
        },
        {
            id: 2,
            discount: "30% OFF",
            title: "YOUR FIRST ORDER",
            description: "Order your favorite food and enjoy 30% off!",
            code: "FIRST30",
            validUntil: "25 May 2026",
            image: pizzaImg,
        },
        {
            id: 3,
            discount: "15% OFF",
            title: "ON ORDERS ABOVE $25",
            description: "Get 15% off on orders above $25. Limited time!",
            code: "SAVE15",
            validUntil: "28 May 2026",
            image: saladImg,
        },
    ];

    return (
        <section className="mt-24 mx-5">

            {/* ================= HEADER ================= */}

            <div className="text-center">

                {/* Badge */}
                <div className="badge bg-orange-100 text-primary border-none px-5 py-4 text-sm font-bold gap-2">
                    <FaTag />
                    SPECIAL OFFERS
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold mt-4">
                    Special{" "}
                    <span className="text-primary">
                        Offers
                    </span>
                </h1>

                {/* Icon Line */}
                <div className="flex justify-center items-center gap-3 mt-4">
                    <div className="w-16 border-t-3 border-primary"></div>

                    <FaGift className="text-primary text-2xl" />

                    <div className="w-16 border-t-3 border-primary"></div>
                </div>

                {/* Description */}
                <p className="text-gray-500 mt-4">
                    Delicious deals for you! Don't miss out on these
                    limited time offers.
                </p>

            </div>


            {/* ================= OFFER CARDS ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                {offers.map(offer => (

                    <div
                        key={offer.id}
                        className={`
                            rounded-3xl
                            p-6
                            relative
                            overflow-hidden
                            min-h-[450px]
                            shadow-sm
                            hover:shadow-xl
                            transition-all
                            duration-300

                            ${offer.id === 1
                                ? "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400"
                                : offer.id === 2
                                    ? "bg-gradient-to-br from-red-200 via-red-300 to-red-400"
                                    : "bg-gradient-to-br from-green-200 via-green-300 to-green-400"
                            }
                        `}
                    >

                        {/* Discount Badge */}

                        <div className={`inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl font-bold shadow-sm relative z-20 ${offer.id === 1 ? "text-primary" : offer.id === 2 ? "text-red-500" : "text-green-600"}`}>
                            🔥 {offer.discount}
                        </div>


                        {/* Offer Content */}

                        <div className="mt-5 relative z-10">

                            <h2 className={`text-4xl font-bold text-gray-800 ${offer.id === 1 ? "text-primary" : offer.id === 2 ? "text-red-500" : "text-green-600"}`}>
                                {offer.discount}
                            </h2>

                            <h3 className="text-xl font-bold mt-2 text-gray-800">
                                {offer.title}
                            </h3>

                            <p className="text-gray-600 mt-3 leading-6 w-50">
                                {offer.description}
                            </p>


                            {/* Coupon */}

                            <div className="border-2 border-dashed border-primary rounded-xl bg-white/70 p-3 mt-5 w-44 text-center">

                                <p className="text-sm text-gray-600">
                                    Use Code:
                                </p>

                                <p className={`font-bold text-lg ${offer.id === 1 ? "text-primary" : offer.id===2 ? "text-red-500" : "text-green-600"}`}>
                                    {offer.code}
                                </p>

                            </div>


                            {/* Valid Date */}

                            <p className="flex items-center gap-2 mt-5 text-gray-700 font-medium">

                                <FaCalendarDays className={`${offer.id === 1 ? "text-primary" : offer.id === 2 ? "text-red-500" : "text-green-600"}`} />

                                Valid Until: {offer.validUntil}

                            </p>


                            {/* Order Button */}

                            <div className="absolute -bottom-17 w-full z-30">
                                <button
                                    className={`
                                        
            btn w-full
            border-none
            text-white
            font-bold

            ${offer.id === 1
                                            ? "bg-orange-500 hover:bg-orange-600"
                                            : offer.id === 2
                                                ? "bg-red-500 hover:bg-red-600"
                                                : "bg-green-500 hover:bg-green-600"
                                        }
        `}
                                >
                                    Order Now
                                    <FaArrowRight />
                                </button>
                            </div>

                        </div>


                        {/* Food Image */}

                        <img
                            src={offer.image}
                            alt={offer.title}
                            className="absolute right-0 top-0 w-1/2 h-full object-contain"
                        />

                    </div>

                ))}

            </div>


            {/* ================= FREE DELIVERY BANNER ================= */}

            <div className="mt-8 bg-orange-50 border border-orange-200 rounded-3xl p-6 md:p-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left */}

                    <div className="flex items-center gap-5">

                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">

                            <FaTruckFast className="text-primary text-4xl" />

                        </div>

                        <div>

                            <p className="text-2xl font-bold">
                                Free Delivery
                            </p>

                            <p className="text-primary text-lg font-bold">
                                On Orders Above $15
                            </p>

                        </div>

                    </div>


                    {/* Middle */}

                    <div className="text-gray-600 text-center md:text-left">

                        Enjoy free and fast delivery
                        <br />
                        on all orders above $15.

                    </div>


                    {/* Button */}

                    <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:border-primary hover:text-white px-7">

                        Order Now

                        <FaArrowRight />

                    </button>

                </div>

            </div>


            {/* ================= FEATURES ================= */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">


                {/* Feature 1 */}

                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

                        <FaPercent className="text-primary text-2xl" />

                    </div>

                    <div>

                        <h3 className="font-bold text-lg">
                            Best Deals Everyday
                        </h3>

                        <p className="text-gray-500">
                            We bring you exciting offers daily
                        </p>

                    </div>

                </div>


                {/* Feature 2 */}

                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

                        <FaGift className="text-primary text-2xl" />

                    </div>

                    <div>

                        <h3 className="font-bold text-lg">
                            Limited Time Offers
                        </h3>

                        <p className="text-gray-500">
                            Hurry up! Offers won't last long
                        </p>

                    </div>

                </div>


                {/* Feature 3 */}

                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">

                        <FaTag className="text-primary text-2xl" />

                    </div>

                    <div>

                        <h3 className="font-bold text-lg">
                            Amazing Discounts
                        </h3>

                        <p className="text-gray-500">
                            Save more on your favorite food
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SpecialOffers;