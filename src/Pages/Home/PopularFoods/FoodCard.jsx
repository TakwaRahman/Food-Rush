import { FaCartShopping, FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const FoodCard = ({ food }) => {

    const axiosSecure = useAxiosSecure();

    const handleAddToCart = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        const cartItem = {
            foodId: food._id,
            name: food.name,
            price: food.price,
            image: food.foodPhoto,
            restaurant: food.restaurant,
            quantity: 1
        };

        try {

            const res = await axiosSecure.post("/cart", cartItem);

            console.log(res.data);

        } catch (error) {

            console.log(error);

        }
    };


    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">

            {/* Food Image */}

            <Link to={`/foods/${food._id}`}>

                <div className="relative h-56 overflow-hidden">

                    <img
                        src={food.foodPhoto}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Rating */}

                    <div className="absolute top-3 right-3 bg-white px-3 py-2 rounded-xl flex items-center gap-1 shadow-sm">

                        <FaStar className="text-primary text-sm" />

                        <span className="font-bold text-black">
                            {food.rating}
                        </span>

                    </div>

                </div>

            </Link>


            {/* Food Information */}

            <div className="p-4">

                <div className="flex justify-between items-start gap-2">

                    <Link to={`/foods/${food._id}`}>

                        <h2 className="text-xl font-bold text-gray-900">
                            {food.name}
                        </h2>

                    </Link>

                    <p className="text-primary text-xl font-bold whitespace-nowrap">
                        ${food.price}
                    </p>

                </div>


                {/* Restaurant */}

                <p className="text-gray-500 font-semibold mt-1">
                    {food.restaurant}
                </p>


                {/* Description */}

                <p className="text-gray-500 text-sm leading-6 mt-3 line-clamp-2">
                    {food.description}
                </p>


                {/* Buttons */}

                <div className="flex gap-2 mt-4">

                    {/* Cart Icon */}

                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline border-primary text-primary hover:bg-primary hover:border-primary hover:text-white w-14"
                    >

                        <FaCartShopping className="text-lg" />

                    </button>


                    {/* Add To Cart */}

                    <button
                        onClick={handleAddToCart}
                        className="btn flex-1 bg-primary hover:bg-orange-600 border-none text-white font-bold"
                    >

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>
    );
};

export default FoodCard;