import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const ResturantCard = ({ resturant }) => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-md hover:shadow-xl transition-shadow duration-300">

            {/* Restaurant Cover Image */}
            <figure className="relative h-52 overflow-hidden">
                <img
                    src={resturant.image}
                    
                    className="w-full h-full object-cover"
                />

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-lg font-semibold">
                    <FaStar className="text-sm" />
                    <span>{resturant.rating}</span>
                </div>
            </figure>

            {/* Card Body */}
            <div className="card-body relative">

                {/* Restaurant Logo */}
                <div className="absolute -top-10 left-5 w-20 h-20">
                    <img
                        src={resturant.logo}
                        
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                    />
                </div>

                {/* Restaurant Information */}
                <div className="pt-8">

                    <div>
                        <h2 className="card-title font-bold text-2xl">
                            {resturant.name}
                        </h2>

                        <p className="text-gray-600 font-semibold">
                            {resturant.cuisine} • {resturant.specialty}
                        </p>

                        {/* Delivery Time */}
                        <div className="mt-4 text-gray-600 flex items-center">

                            <p className="flex items-center gap-2">
                                <MdOutlineWatchLater className="text-primary text-xl" />
                                {resturant.deliveryTime}
                            </p>

                            {/* Location */}
                            <p className="flex items-center gap-2">
                                <FaLocationDot className="text-primary text-lg" />
                                {resturant.location}
                            </p>

                        </div>
                    </div>

                    {/* View Menu Button */}
                    <div className="card-actions mt-5">
                        <button className="btn w-full bg-orange-100 text-primary border-none hover:bg-primary hover:text-white font-bold">
                            View Menu
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ResturantCard;