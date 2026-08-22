import { FaCartShopping, FaStar } from "react-icons/fa6";

const FoodCard = ({ food }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">

            {/* Food Image */}
            <div className="relative h-56 overflow-hidden">

                <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white px-3 py-2 rounded-xl flex items-center gap-1 shadow-sm">
                    <FaStar className="text-primary text-sm" />
                    <span className="font-bold text-gray-800">
                        {food.rating}
                    </span>
                </div>

            </div>


            {/* Food Information */}
            <div className="p-4">

                {/* Name + Price */}
                <div className="flex justify-between items-start gap-2">

                    <h2 className="text-xl font-bold text-gray-900">
                        {food.name}
                    </h2>

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
                    <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:border-primary hover:text-white w-14">
                        <FaCartShopping className="text-lg" />
                    </button>


                    {/* Add To Cart */}
                    <button className="btn flex-1 bg-primary hover:bg-orange-600 border-none text-white font-bold">
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
};

export default FoodCard;