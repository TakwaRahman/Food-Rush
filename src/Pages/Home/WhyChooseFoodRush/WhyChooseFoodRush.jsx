import {
    FaAward,
    FaMotorcycle,
    FaLeaf,
    FaShieldHalved,
    FaStore,
    FaUsers,
    FaTruckFast,
    FaStar,
} from "react-icons/fa6";

import { TbChefHatFilled } from "react-icons/tb";


const WhyChooseFoodRush = () => {

    // Later this data can come from your backend / MongoDB
    const stats = [
        {
            id: 1,
            value: "10K+",
            label: "Happy Customers",
            icon: FaUsers,
            iconBg: "bg-orange-100",
            iconColor: "text-primary",
        },
        {
            id: 2,
            value: "500+",
            label: "Restaurants",
            icon: FaStore,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
        },
        {
            id: 3,
            value: "30K+",
            label: "Orders Delivered",
            icon: FaTruckFast,
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
        },
        {
            id: 4,
            value: "4.8",
            label: "Customer Rating",
            icon: FaStar,
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-500",
        },
    ];


    return (
        <section className="mt-24 mx-5">

            {/* ================= HEADER ================= */}

            <div className="text-center">

                {/* Badge */}
                <div className="badge bg-orange-100 text-primary border-none px-5 py-4 text-sm font-bold gap-2">
                    <FaAward />
                    WHY CHOOSE FOODRUSH?
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold mt-4">
                    Why Choose{" "}
                    <span className="text-primary">
                        FoodRush
                    </span>
                </h1>

                {/* Icon Line */}
                <div className="flex justify-center items-center gap-3 mt-5">
                    <div className="w-16 border-t-3 border-primary"></div>

                    <TbChefHatFilled className="text-primary text-3xl" />

                    <div className="w-16 border-t-3 border-primary"></div>
                </div>

                {/* Description */}
                <p className="text-gray-500 mt-4">
                    Delicious food, fast delivery & great service
                </p>

            </div>


            {/* ================= FEATURE CARDS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">


                {/* ================= CARD 1 ================= */}

                <div className="bg-orange-100 border border-transparent hover:border-orange-400 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                            <FaMotorcycle className="text-white text-3xl" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-6">
                        Fast Delivery
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        Get your food delivered at your doorstep in
                        <br />
                        <span className="text-primary font-bold text-lg">
                            30-45 Minutes
                        </span>
                    </p>

                    <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6"></div>

                </div>


                {/* ================= CARD 2 ================= */}

                <div className="bg-green-50 border border-transparent hover:border-green-500 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                            <FaLeaf className="text-white text-3xl" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-6">
                        Fresh & Delicious Food
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        We serve only the freshest & highest quality food
                    </p>

                    <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mt-6"></div>

                </div>


                {/* ================= CARD 3 ================= */}

                <div className="bg-red-50 border border-transparent hover:border-red-500 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-md">
                            <FaShieldHalved className="text-white text-3xl" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-6">
                        Safe & Secure Payment
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        100% secure payment methods and your data is always protected
                    </p>

                    <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-6"></div>

                </div>


                {/* ================= CARD 4 ================= */}

                <div className="bg-yellow-50 border border-transparent hover:border-yellow-500 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center shadow-md">
                            <FaStore className="text-white text-3xl" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-6">
                        Best Restaurants
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        We partner with the best & most trusted restaurants
                    </p>

                    <div className="w-16 h-1 bg-yellow-500 rounded-full mx-auto mt-6"></div>

                </div>

            </div>


            {/* ================= DYNAMIC STATS ================= */}

            <div className="mt-10 bg-white rounded-3xl shadow-md p-6 md:p-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((stat) => {

                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.id}
                                className="flex items-center justify-center gap-4"
                            >

                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-full ${stat.iconBg} flex items-center justify-center`}
                                >
                                    <Icon
                                        className={`${stat.iconColor} text-xl`}
                                    />
                                </div>


                                {/* Data */}
                                <div>

                                    <h3 className="text-2xl font-bold">
                                        {stat.value}
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        {stat.label}
                                    </p>

                                </div>

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default WhyChooseFoodRush;