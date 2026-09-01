import { FaStar } from "react-icons/fa6";
import { TbChefHatFilled } from "react-icons/tb";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const PopularFoods = () => {

    const axiosSecure = useAxiosSecure();

    const [foods, setFoods] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Foods");

    useEffect(() => {
        axiosSecure.get('/foods').then(res => {
            setFoods(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const categories = [
        { name: "All Foods", icon: "▦" },
        { name: "Burger", icon: "🍔" },
        { name: "Pizza", icon: "🍕" },
        { name: "Biryani", icon: "🍛" },
        { name: "Japanese", icon: "🍣" },
        { name: "Salad", icon: "🥗" },
        { name: "Drinks", icon: "🥤" },
        { name: "Asian", icon: "🥤" },
    ];


    // ================= FILTER LOGIC =================

    const filteredFoods = selectedCategory === "All Foods"
        ? foods
        : foods.filter(food => food.category === selectedCategory);


    return (
        <div className="mt-24">

            {/* ================= TITLE SECTION ================= */}

            <div className="text-center">

                <div className="badge bg-orange-100 text-primary border-none px-5 py-4 text-sm font-bold">
                    <FaStar />
                    MOST LOVED DISHES
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mt-4">
                    Popular{" "}
                    <span className="text-primary">
                        Foods
                    </span>
                </h1>

                <div className="flex justify-center items-center gap-3 mt-4">
                    <div className="w-16 border-t-3 border-primary"></div>
                    <TbChefHatFilled className="text-primary text-3xl" />
                    <div className="w-16 border-t-3 border-primary"></div>
                </div>

                <p className="text-gray-500 mt-4">
                    Discover our customers' favorite dishes from top restaurants
                </p>

            </div>


            {/* ================= CATEGORY TAGS ================= */}

            <div className="flex justify-center flex-wrap gap-3 mt-8">

                {categories.map(category => (

                    <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-5 py-3 border rounded-xl
                        flex items-center gap-2 font-semibold
                        transition duration-300
                        ${
                            selectedCategory === category.name
                                ? "bg-primary text-white border-primary"
                                : "bg-white border-gray-200 hover:border-primary hover:text-primary"
                        }`}
                    >

                        <span className="text-xl">
                            {category.icon}
                        </span>

                        <span>
                            {category.name}
                        </span>

                    </button>

                ))}

            </div>


            {/* ================= FOOD CARDS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">

                {
                    filteredFoods.length > 0 ? (
                        filteredFoods.map(food => (
                            <FoodCard
                                key={food._id}
                                food={food}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-400 py-10">
                            No foods found in this category.
                        </p>
                    )
                }

            </div>


            {/* ================= VIEW ALL BUTTON ================= */}

            <div className="flex justify-center mt-8">
                <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:border-primary hover:text-white px-7">
                    View All Foods
                </button>
            </div>

        </div>
    );
};

export default PopularFoods;