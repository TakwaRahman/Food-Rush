import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    FaHeart,
    FaLocationDot,
    FaClock,
    FaStar,
    FaPhone,
    FaEnvelope,
    FaCartShopping,
    FaMagnifyingGlass
} from "react-icons/fa6";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const RestaurentsDetails = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const [restaurant, setRestaurant] = useState(null);
    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState("All");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        // Restaurant information
        axiosSecure
            .get(`/restaurants/${id}`)
            .then(res => {
                setRestaurant(res.data);
            })
            .catch(err => {
                console.log("Restaurant Error:", err);
            });

        // Restaurant foods
        axiosSecure
            .get(`/restaurants/${id}/foods`)
            .then(res => {
                setFoods(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log("Foods Error:", err);
                setLoading(false);
            });

    }, [id, axiosSecure]);


    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }


    if (!restaurant) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2 className="text-3xl font-bold">
                    Restaurant not found
                </h2>
            </div>
        );
    }


    const categories = [
        "All",
        "Burger",
        "Pizza",
        "Chicken",
        "Noodles",
        "Biryani",
        "Drinks"
    ];


    const filteredFoods =
        category === "All"
            ? foods
            : foods.filter(food => food.category === category);


    return (
        <div className="bg-base-100 min-h-screen">


            {/* ================= RESTAURANT HERO ================= */}

            <section className="relative h-[420px]">

                {/* Cover Image */}

                <img
                    src={
                        restaurant.coverPhoto ||
                        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                    }
                    alt={restaurant.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />


                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/65"></div>


                {/* Restaurant Information */}

                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">

                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8 text-white">


                        {/* Restaurant Logo */}

                        <div className="shrink-0">

                            <img
                                src={restaurant.restaurantImage}
                                
                                className="w-44 h-44 rounded-3xl object-cover border-4 border-white shadow-2xl"
                            />

                        </div>


                        {/* Information */}

                        <div className="text-center md:text-left">

                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {restaurant.name}
                            </h1>


                            {/* Restaurant Details */}

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mb-5">


                                {/* Rating */}

                                <div className="flex items-center gap-2">

                                    <FaStar className="text-yellow-400" />

                                    <span>
                                        {restaurant.rating || "4.8"}
                                    </span>

                                    <span className="text-gray-300">
                                        ({restaurant.reviews || 320} Reviews)
                                    </span>

                                </div>


                                {/* Location */}

                                <div className="flex items-center gap-2">

                                    <FaLocationDot className="text-primary" />

                                    <span>
                                        {restaurant.location || "Dhaka, Bangladesh"}
                                    </span>

                                </div>


                                {/* Delivery Time */}

                                <div className="flex items-center gap-2">

                                    <FaClock className="text-primary" />

                                    <span>
                                        {restaurant.deliveryTime || "20-30 min"}
                                    </span>

                                </div>


                                {/* Status */}

                                <span className="bg-green-500 px-4 py-1 rounded-full font-semibold">

                                    Open

                                </span>

                            </div>


                            {/* Description */}

                            <p className="text-gray-200 max-w-2xl leading-7">

                                {restaurant.description ||
                                    "We serve delicious and fresh food with the best quality ingredients. Your satisfaction is our first priority."}

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================= MENU ================= */}

            <main className="max-w-7xl mx-auto px-4 py-12">


                {/* Menu Title */}

                <div className="mb-7">

                    <h2 className="text-3xl font-bold">
                        {restaurant.name} Menu
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Choose your favorite food
                    </p>

                </div>


                {/* ================= CATEGORY ================= */}

                <div className="flex gap-3 overflow-x-auto pb-5 mb-5">

                    {categories.map(item => (

                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`px-6 py-3 rounded-xl whitespace-nowrap font-semibold transition ${
                                category === item
                                    ? "bg-primary text-white"
                                    : "bg-base-200 hover:bg-primary hover:text-white"
                            }`}
                        >

                            {item}

                        </button>

                    ))}

                </div>



                {/* ================= FOOD GRID ================= */}

                {filteredFoods.length === 0 ? (

                    <div className="py-20 text-center">

                        <h3 className="text-2xl font-bold">
                            No food found
                        </h3>

                        <p className="text-gray-500 mt-2">
                            This restaurant hasn't added food in this category yet.
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {filteredFoods.map(food => (

                            <div
                                key={food._id}
                                className="bg-base-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                            >


                                {/* Food Image */}

                                <div className="relative">

                                    <img
                                        src={food.foodPhoto}
                                        alt={food.name}
                                        className="w-full h-52 object-cover"
                                    />


                                    {/* Favorite */}

                                    <button
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:text-primary transition"
                                    >

                                        <FaHeart />

                                    </button>

                                </div>



                                {/* Food Information */}

                                <div className="p-4">


                                    <h3 className="font-bold text-lg">
                                        {food.name}
                                    </h3>


                                    {/* Rating */}

                                    <div className="flex items-center gap-1 mt-2">

                                        <FaStar className="text-yellow-400" />

                                        <span className="text-sm">
                                            {food.rating || "4.8"}
                                        </span>

                                    </div>


                                    {/* Price */}

                                    <div className="flex justify-between items-center mt-3 mb-4">

                                        <span className="text-xl font-bold text-primary">
                                            ৳{food.price}
                                        </span>

                                    </div>


                                    {/* Add Cart */}

                                    <button className="btn btn-primary text-white w-full rounded-xl">

                                        <FaCartShopping />

                                        Add to Cart

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}



                {/* ================= ABOUT RESTAURANT ================= */}

                <section className="mt-14 bg-base-200 rounded-3xl p-7 md:p-10">


                    <h2 className="text-2xl font-bold mb-7">
                        About This Restaurant
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                        {/* Description */}

                        <div>

                            <p className="text-gray-500 leading-7">

                                {restaurant.description ||
                                    "Our restaurant provides fresh, delicious and hygienic food for everyone. We always try to maintain the highest quality."}

                            </p>

                        </div>


                        {/* Location */}

                        <div>

                            <div className="flex items-start gap-3">

                                <FaLocationDot className="text-primary text-xl mt-1" />

                                <div>

                                    <h3 className="font-semibold">
                                        Location
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        {restaurant.location || "Dhaka, Bangladesh"}
                                    </p>

                                </div>

                            </div>


                            <div className="flex items-start gap-3 mt-6">

                                <FaClock className="text-primary text-xl mt-1" />

                                <div>

                                    <h3 className="font-semibold">
                                        Opening Hours
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        10:00 AM - 11:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* Contact */}

                        <div>

                            <div className="flex items-start gap-3">

                                <FaPhone className="text-primary text-xl mt-1" />

                                <div>

                                    <h3 className="font-semibold">
                                        Contact
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        {restaurant.phone || "+880 1712-345678"}
                                    </p>

                                </div>

                            </div>


                            <div className="flex items-start gap-3 mt-6">

                                <FaEnvelope className="text-primary text-xl mt-1" />

                                <div>

                                    <h3 className="font-semibold">
                                        Email
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        {restaurant.email || "info@foodrush.com"}
                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* Map */}

                        <div>

                            <div className="w-full h-40 bg-gray-300 rounded-2xl flex items-center justify-center">

                                <FaLocationDot className="text-primary text-4xl" />

                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
};

export default RestaurentsDetails;