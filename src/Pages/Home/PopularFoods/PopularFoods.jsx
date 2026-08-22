import { FaStar } from "react-icons/fa6";
import { TbChefHatFilled } from "react-icons/tb";
import FoodCard from "./FoodCard";

const PopularFoods = () => {

    const foods = [
        {
            id: 1,
            name: "Classic Beef Burger",
            image: "/foods/classic-beef-burger.jpg",
            price: 8.99,
            rating: 4.9,
            category: "Burger",
            restaurant: "Burger House",
            description: "Juicy beef patty with fresh lettuce, tomato, cheese and special sauce.",
            orderCount: 1250,
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            image: "/foods/pepperoni-pizza.jpg",
            price: 12.50,
            rating: 4.8,
            category: "Pizza",
            restaurant: "Pizza Palace",
            description: "Classic pizza topped with pepperoni and 100% mozzarella cheese.",
            orderCount: 1180,
        },
        {
            id: 3,
            name: "Chicken Biryani",
            image: "/foods/chicken-biryani.jpg",
            price: 10.00,
            rating: 4.9,
            category: "Biryani",
            restaurant: "Spice House",
            description: "Aromatic basmati rice cooked with tender chicken and traditional spices.",
            orderCount: 1100,
        },
        {
            id: 4,
            name: "Creamy Alfredo Pasta",
            image: "/foods/alfredo-pasta.jpg",
            price: 9.50,
            rating: 4.7,
            category: "Pasta",
            restaurant: "Pasta Express",
            description: "Creamy white sauce pasta with mushroom and parmesan cheese.",
            orderCount: 920,
        },
        {
            id: 5,
            name: "Crispy Fried Chicken",
            image: "/foods/fried-chicken.jpg",
            price: 7.99,
            rating: 4.8,
            category: "Chicken",
            restaurant: "Chicken Hub",
            description: "Golden crispy fried chicken with our special seasoning.",
            orderCount: 1050,
        },
        {
            id: 6,
            name: "Salmon Sushi Roll",
            image: "/foods/salmon-sushi.jpg",
            price: 11.99,
            rating: 4.7,
            category: "Sushi",
            restaurant: "Sushi World",
            description: "Fresh salmon with avocado, cucumber and sushi rice.",
            orderCount: 760,
        },
        {
            id: 7,
            name: "Chocolate Lava Cake",
            image: "/foods/chocolate-lava-cake.jpg",
            price: 6.50,
            rating: 4.9,
            category: "Desserts",
            restaurant: "Sweet Delight",
            description: "Warm chocolate cake with a delicious molten chocolate center.",
            orderCount: 680,
        },
        {
            id: 8,
            name: "Virgin Mojito",
            image: "/foods/virgin-mojito.jpg",
            price: 3.99,
            rating: 4.6,
            category: "Drinks",
            restaurant: "Drink Station",
            description: "Refreshing lime, mint and soda perfect for any meal.",
            orderCount: 590,
        },
    ];

    const categories = [
        {
            name: "All Foods",
            icon: "▦",
        },
        {
            name: "Burger",
            icon: "🍔",
        },
        {
            name: "Pizza",
            icon: "🍕",
        },
        {
            name: "Biryani",
            icon: "🍛",
        },
        {
            name: "Sushi",
            icon: "🍣",
        },
        {
            name: "Salad",
            icon: "🥗",
        },
        {
            name: "Drinks",
            icon: "🥤",
        },
    ];

    return (
        <div className="mt-24">

            {/* ================= TITLE SECTION ================= */}

            <div className="text-center">

                {/* Badge */}
                <div className="badge bg-orange-100 text-primary border-none px-5 py-4 text-sm font-bold">
                    <FaStar />
                    MOST LOVED DISHES
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold mt-4">
                    Popular{" "}
                    <span className="text-primary">
                        Foods
                    </span>
                </h1>

                {/* Chef Icon + Line */}
                <div className="flex justify-center items-center gap-3 mt-4">

                    <div className="w-16 border-t-3 border-primary"></div>

                    <TbChefHatFilled className="text-primary text-3xl" />

                    <div className="w-16 border-t-3 border-primary"></div>

                </div>

                {/* Description */}
                <p className="text-gray-500 mt-4">
                    Discover our customers' favorite dishes from top restaurants
                </p>

            </div>


            {/* ================= CATEGORY TAGS ================= */}

            <div className="flex justify-center flex-wrap gap-3 mt-8">

                {categories.map(category => (

                    <button
                        key={category.name}
                        className="px-5 py-3 bg-white border border-gray-200 rounded-xl
                        flex items-center gap-2 font-semibold
                        hover:border-primary hover:text-primary
                        transition duration-300"
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
                    foods.map(food => (
                        <FoodCard
                            key={food.id}
                            food={food}
                        />
                    ))
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