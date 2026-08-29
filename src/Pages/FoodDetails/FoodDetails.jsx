import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    FaCartShopping,
    FaClock,
    FaHeart,
    FaLeaf,
    FaLocationDot,
    FaPlus,
    FaMinus,
    FaUtensils
} from "react-icons/fa6";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";

const FoodDetails = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const [food, setFood] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axiosSecure.get(`/foods/${id}`)
            .then(res => {
                setFood(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
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


    if (!food) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center gap-4">
                <h2 className="text-3xl font-bold">
                    Food not found
                </h2>

                <button
                    onClick={() => window.history.back()}
                    className="btn btn-primary text-white"
                >
                    Go Back
                </button>
            </div>
        );
    }


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };


    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    return (

        <div className="bg-base-100 min-h-screen py-10">

            <div className="max-w-7xl mx-auto px-4">


                {/* ================= MAIN SECTION ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">


                    {/* ================= IMAGE + ABOUT ================= */}

                    <div>

                        <div className="relative">

                            <img
                                src={food.foodPhoto}
                                alt={food.name}
                                className="w-full h-120 object-cover rounded-3xl shadow-md"
                            />


                            {/* Favorite */}

                            <button
                                className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:text-primary transition"
                            >
                                <FaHeart className="text-xl" />
                            </button>

                        </div>


                        {/* About This Food — fills the gap under the image */}

                        <div className="border border-gray-200 rounded-2xl p-7 mt-7">

                            <h2 className="text-2xl font-bold mb-4">
                                About This Food
                            </h2>

                            <p className="text-gray-500 leading-7">
                                {food.description}
                            </p>

                        </div>

                    </div>



                    {/* ================= FOOD INFO ================= */}

                    <div>

                        <p className="text-primary font-semibold mb-2">
                            {food.category}
                        </p>


                        <h1 className="text-4xl md:text-5xl font-bold mb-5">
                            {food.name}
                        </h1>


                        {/* Price */}

                        <div className="text-3xl font-bold text-primary mb-7">
                            ৳ {food.price}
                        </div>



                        {/* ================= FOOD INFORMATION ================= */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden mb-7">


                            {/* Category */}

                            <div className="p-5 border-b sm:border-b-0 sm:border-r border-gray-200">

                                <FaUtensils className="text-primary text-xl mb-3" />

                                <p className="text-sm text-gray-400">
                                    Category
                                </p>

                                <p className="font-semibold mt-1">
                                    {food.category}
                                </p>

                            </div>



                            {/* Food Type */}

                            <div className="p-5 border-b sm:border-b-0 sm:border-r border-gray-200">

                                <FaLeaf className="text-primary text-xl mb-3" />

                                <p className="text-sm text-gray-400">
                                    Food Type
                                </p>

                                <p className="font-semibold mt-1">
                                    {food.foodType}
                                </p>

                            </div>



                            {/* Preparation */}

                            <div className="p-5">

                                <FaClock className="text-primary text-xl mb-3" />

                                <p className="text-sm text-gray-400">
                                    Preparation
                                </p>

                                <p className="font-semibold mt-1">
                                    {food.preparationTime}
                                </p>

                            </div>

                        </div>



                        {/* ================= AVAILABILITY ================= */}

                        <div className="flex items-center gap-3 mb-7">

                            <span
                                className={`w-3 h-3 rounded-full ${
                                    food.availability === "Available"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            ></span>

                            <span className="font-semibold">
                                {food.availability}
                            </span>

                        </div>



                        {/* ================= QUANTITY ================= */}

                        <div className="mb-5">

                            <p className="font-semibold mb-3">
                                Quantity
                            </p>


                            <div className="flex items-center gap-5">

                                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">

                                    <button
                                        onClick={decreaseQuantity}
                                        className="w-12 h-12 flex justify-center items-center hover:bg-gray-100"
                                    >
                                        <FaMinus />
                                    </button>


                                    <span className="w-12 text-center font-semibold">
                                        {quantity}
                                    </span>


                                    <button
                                        onClick={increaseQuantity}
                                        className="w-12 h-12 flex justify-center items-center hover:bg-gray-100"
                                    >
                                        <FaPlus />
                                    </button>

                                </div>


                                <p className="text-gray-500">
                                    Total:{" "}
                                    <span className="font-bold text-black">
                                        ৳ {(Number(food.price) * quantity).toFixed(2)}
                                    </span>
                                </p>

                            </div>

                        </div>



                        {/* ================= BUTTONS ================= */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <button
                                className="btn btn-primary text-white rounded-xl h-14"
                            >
                                <FaCartShopping />
                                Add to Cart
                            </button>


                            <button
                                className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white rounded-xl h-14"
                            >
                                Order Now
                            </button>

                        </div>



                        {/* ================= RESTAURANT (compact) ================= */}

                        <div className="border border-gray-200 rounded-2xl p-4 mt-7 flex items-center justify-between gap-4">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                    <FaUtensils className="text-primary text-lg" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm">
                                        FoodRush Restaurant
                                    </h3>

                                    <p className="text-gray-400 flex items-center gap-1 text-xs mt-0.5">
                                        <FaLocationDot className="text-primary text-xs" />
                                        Your favorite food destination
                                    </p>
                                </div>

                            </div>

                            <button className="btn btn-outline btn-sm border-primary text-primary hover:bg-primary hover:text-white rounded-lg shrink-0">
                                View
                            </button>

                        </div>

                    </div>

                </div>



                {/* ================= DELIVERY ================= */}

                <div className="mt-7 bg-orange-50 rounded-2xl p-7 flex flex-col sm:flex-row justify-between items-center gap-5">

                    <div>

                        <h3 className="text-xl font-bold">
                            🚴 Free Delivery
                        </h3>

                        <p className="text-gray-500 mt-1">
                            On orders above ৳300
                        </p>

                    </div>


                    <button className="btn btn-primary text-white rounded-xl px-8">
                        Order Now
                    </button>

                </div>

            </div>

        </div>
    );
};

export default FoodDetails;