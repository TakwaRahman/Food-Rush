
import { FaAward, FaMotorcycle, FaTag, FaUtensils } from 'react-icons/fa6';
import bannerImg from '../../../assets/Gemini_Generated_Image_hazsdphazsdphazs.jpg';

const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-between items-center flex-col lg:flex-row-reverse relative">
                    <img
                        alt="Tailwind CSS hero component"
                        src={bannerImg}
                        className="w-full max-w-4xl rounded-3xl"
                    />
                    <div className='text-center lg:text-left mt-5 lg:mt-0 lg:ml-25'>
                        <h1 className="text-4xl lg:text-6xl font-bold">Delicious Food,</h1>
                        <h1 className="text-4xl lg:text-6xl font-bold text-primary">Delivered Fast!</h1>
                        <p className="py-6 font-semibold">
                            Your favoright meals from the best restaurants,
                            <br />
                            delivered straight to your door
                        </p>

                        <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                            <button className="btn btn-primary text-white rounded-xl hover:bg-primary-dark p-6 text-xl">
                                Order Now
                            </button>

                            <button className="font-semibold btn text-primary bg-[#FEF3E5] border-primary rounded-xl hover:bg-primary hover:text-white p-6 text-xl">Explore Restaurants</button>
                        </div>
                    </div>

                </div>

                <div className='flex items-center bg-white w-fit py-3 pl-3 pr-5 absolute ml-320 mt-[-175px] rounded-2xl space-x-3 hidden lg:flex'>
                    <div className='p-3 bg-red-400 rounded-full'>
                        <FaMotorcycle></FaMotorcycle>
                    </div>
                    <div className='text-center'>
                        <h3 className='font-bold text-xl'>Fast Delivery</h3>
                        <p className='font-semibold text-gray-500'>At Your Doorstep</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl mx-10 shadow-sm p-5 lg:p-6 mt-10 lg:mt-0">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Wide Variety */}
                    <div className="flex items-center gap-4 px-4 py-3 lg:border-r border-gray-200">
                        <div className="bg-[#FEF3E5] text-primary rounded-full p-4 text-2xl">
                            <FaUtensils />
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                Wide Variety
                            </h3>
                            <p className="text-sm text-gray-500">
                                Choose from a wide
                                <br />
                                range of cuisines.
                            </p>
                        </div>
                    </div>


                    {/* Best Quality */}
                    <div className="flex items-center gap-4 px-4 py-3 lg:border-r border-gray-200">
                        <div className="bg-[#FEF3E5] text-primary rounded-full p-4 text-2xl">
                            <FaAward />
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                Best Quality
                            </h3>
                            <p className="text-sm text-gray-500">
                                Fresh ingredients and
                                <br />
                                hygienic preparation.
                            </p>
                        </div>
                    </div>


                    {/* Fast Delivery */}
                    <div className="flex items-center gap-4 px-4 py-3 lg:border-r border-gray-200">
                        <div className="bg-[#FEF3E5] text-primary rounded-full p-4 text-2xl">
                            <FaMotorcycle />
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                Fast Delivery
                            </h3>
                            <p className="text-sm text-gray-500">
                                Quick and on-time
                                <br />
                                delivery at your door.
                            </p>
                        </div>
                    </div>


                    {/* Best Offers */}
                    <div className="flex items-center gap-4 px-4 py-3">
                        <div className="bg-[#FEF3E5] text-primary rounded-full p-4 text-2xl">
                            <FaTag />
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                Best Offers
                            </h3>
                            <p className="text-sm text-gray-500">
                                Exciting deals and
                                <br />
                                discounts every day.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;