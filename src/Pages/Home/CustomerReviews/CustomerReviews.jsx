import { useState } from "react";

import {
    FaArrowLeft,
    FaArrowRight,
    FaAward,
    FaHeart,
    FaLocationDot,
    FaStar,
    FaUsers,
} from "react-icons/fa6";

import { TbChefHatFilled } from "react-icons/tb";

import burgerImg from "../../../assets/pngtree-delicious-fast-food-lunch-meal-set-png-image_19957273.webp";

import pizzaImg from "../../../assets/pngtree-delicious-chicken-noodle-bowl-with-chopsticks-transparent-background-png-image_17914017.webp";

import noodlesImg from "../../../assets/pngtree-burger-and-fries-delicious-fast-food-combo-transparent-background-png-image_13279170.png";


const CustomerReviews = () => {

    // =====================================================
    // REVIEWS DATA
    // Later this data can come from MongoDB / API
    // =====================================================

    const reviews = [
        {
            id: 1,
            name: "Rahim Ahmed",
            location: "Dhaka, Bangladesh",
            image: "/customers/rahim.jpg",
            rating: 5,
            review:
                "FoodRush is simply awesome! The food is always fresh, tasty and delivery is super fast. Highly recommended!",
            foodImage: burgerImg,
            reaction: "Love it!",
            reactionBg: "bg-red-50",
            reactionColor: "text-red-500",
        },

        {
            id: 2,
            name: "Nusrat Jahan",
            location: "Chattogram, Bangladesh",
            image: "/customers/nusrat.jpg",
            rating: 5,
            review:
                "I love the variety of restaurants and the food quality is top-notch. FoodRush has become my go-to food delivery app!",
            foodImage: noodlesImg,
            reaction: "Very Good!",
            reactionBg: "bg-green-50",
            reactionColor: "text-green-600",
        },

        {
            id: 3,
            name: "Arafat Hossain",
            location: "Sylhet, Bangladesh",
            image: "/customers/arafat.jpg",
            rating: 5,
            review:
                "Super fast delivery and great customer service. I always get my favorite food hot and on time.",
            foodImage: pizzaImg,
            reaction: "Excellent!",
            reactionBg: "bg-blue-50",
            reactionColor: "text-blue-600",
        },

        {
            id: 4,
            name: "Sadia Rahman",
            location: "Rajshahi, Bangladesh",
            image: "/customers/sadia.jpg",
            rating: 4,
            review:
                "Amazing food quality and the ordering process is very easy. I really enjoy using FoodRush.",
            foodImage: burgerImg,
            reaction: "Amazing!",
            reactionBg: "bg-orange-50",
            reactionColor: "text-orange-500",
        },

        {
            id: 5,
            name: "Tanvir Hasan",
            location: "Khulna, Bangladesh",
            image: "/customers/tanvir.jpg",
            rating: 5,
            review:
                "The delivery was quick and the food arrived perfectly packed. Definitely one of my favorite food apps.",
            foodImage: pizzaImg,
            reaction: "Perfect!",
            reactionBg: "bg-purple-50",
            reactionColor: "text-purple-600",
        },

        {
            id: 6,
            name: "Mim Akter",
            location: "Dhaka, Bangladesh",
            image: "/customers/mim.jpg",
            rating: 5,
            review:
                "Great restaurants, delicious food and excellent service. FoodRush never disappoints me.",
            foodImage: noodlesImg,
            reaction: "Loved it!",
            reactionBg: "bg-pink-50",
            reactionColor: "text-pink-500",
        },
    ];


    // =====================================================
    // REVIEW STATS DATA
    // Later this can also come from backend
    // =====================================================

    const reviewStats = [
        {
            id: 1,
            value: "10K+",
            label: "Happy Customers",
            icon: FaUsers,
            bg: "bg-orange-100",
            color: "text-primary",
        },

        {
            id: 2,
            value: "25K+",
            label: "Positive Reviews",
            icon: FaHeart,
            bg: "bg-green-100",
            color: "text-green-600",
        },

        {
            id: 3,
            value: "4.8",
            label: "Average Rating",
            icon: FaStar,
            bg: "bg-yellow-100",
            color: "text-yellow-500",
        },

        {
            id: 4,
            value: "100%",
            label: "Customer Satisfaction",
            icon: FaHeart,
            bg: "bg-red-100",
            color: "text-red-500",
        },
    ];


    // =====================================================
    // SLIDER STATE
    // =====================================================

    const [currentIndex, setCurrentIndex] = useState(0);


    // =====================================================
    // SHOW 3 REVIEWS
    // =====================================================

    const visibleReviews = reviews.slice(
        currentIndex,
        currentIndex + 3
    );


    // =====================================================
    // NEXT REVIEWS
    // =====================================================

    const nextReviews = () => {

        setCurrentIndex((prev) => {

            if (prev + 3 >= reviews.length) {
                return 0;
            }

            return prev + 3;
        });

    };


    // =====================================================
    // PREVIOUS REVIEWS
    // =====================================================

    const previousReviews = () => {

        setCurrentIndex((prev) => {

            if (prev - 3 < 0) {
                return Math.max(reviews.length - 3, 0);
            }

            return prev - 3;
        });

    };


    // =====================================================
    // TOTAL SLIDES
    // =====================================================

    const totalSlides = Math.ceil(reviews.length / 3);


    return (

        <section className="mt-24 mx-5">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="text-center">

                {/* Badge */}

                <div className="badge bg-orange-100 text-primary border-none px-5 py-4 text-sm font-bold gap-2">

                    <FaAward />

                    WHAT OUR CUSTOMERS SAY

                </div>


                {/* Heading */}

                <h1 className="text-5xl md:text-6xl font-bold mt-4">

                    Customer{" "}

                    <span className="text-primary">
                        Reviews
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

                    Real people. Real reviews. Real satisfaction.

                </p>

            </div>


            {/* =================================================
                REVIEW CARDS
            ================================================= */}

            <div className="relative mt-12">


                {/* Previous Button */}

                <button
                    onClick={previousReviews}
                    className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                >

                    <FaArrowLeft />

                </button>


                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {visibleReviews.map((review) => (

                        <div
                            key={review.id}
                            className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-50"
                        >

                            {/* Customer Information */}

                            <div className="flex items-start justify-between">

                                <div className="flex items-center gap-4">

                                    {/* Customer Image */}

                                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-100">

                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-full h-full object-cover"
                                        />

                                    </div>


                                    {/* Name + Location */}

                                    <div>

                                        <h3 className="font-bold text-lg">
                                            {review.name}
                                        </h3>

                                        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">

                                            <FaLocationDot className="text-primary" />

                                            {review.location}

                                        </p>

                                    </div>

                                </div>


                                {/* Quote */}

                                <span className="text-primary text-5xl font-bold leading-none">
                                    "
                                </span>

                            </div>


                            {/* Rating */}

                            <div className="flex gap-1 mt-5">

                                {[...Array(5)].map((_, index) => (

                                    <FaStar
                                        key={index}
                                        className={
                                            index < review.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }
                                    />

                                ))}

                            </div>


                            {/* Review Text */}

                            <p className="text-gray-600 leading-7 mt-5 min-h-28">

                                {review.review}

                            </p>


                            {/* Food Image + Reaction */}

                            <div className="flex items-center justify-between mt-6">

                                {/* Food */}

                                <div className="w-24 h-20">

                                    <img
                                        src={review.foodImage}
                                        alt="Food"
                                        className="w-full h-full object-contain"
                                    />

                                </div>


                                {/* Reaction */}

                                <div
                                    className={`flex items-center gap-2 px-5 py-3 rounded-full ${review.reactionBg} ${review.reactionColor} font-bold`}
                                >

                                    <FaHeart />

                                    {review.reaction}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Next Button */}

                <button
                    onClick={nextReviews}
                    className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                >

                    <FaArrowRight />

                </button>

            </div>


            {/* =================================================
                SLIDER DOTS
            ================================================= */}

            <div className="flex justify-center gap-2 mt-7">

                {Array.from({ length: totalSlides }).map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index * 3)}
                        className={`w-3 h-3 rounded-full transition ${
                            currentIndex === index * 3
                                ? "bg-primary"
                                : "bg-gray-300"
                        }`}
                    ></button>

                ))}

            </div>


            {/* =================================================
                DYNAMIC REVIEW STATS
            ================================================= */}

            <div className="mt-12 bg-white rounded-3xl shadow-md p-6 md:p-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {reviewStats.map((stat) => {

                        const Icon = stat.icon;

                        return (

                            <div
                                key={stat.id}
                                className="flex items-center justify-center gap-4"
                            >

                                {/* Icon */}

                                <div
                                    className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center`}
                                >

                                    <Icon
                                        className={`${stat.color} text-xl`}
                                    />

                                </div>


                                {/* Dynamic Value */}

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

export default CustomerReviews;