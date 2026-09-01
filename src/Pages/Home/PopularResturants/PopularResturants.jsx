import { BiDish } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import burgerImg from '../../../assets/8c27e9da862d35e6835442dc94b055f7.jpg';
import burgerLogo from '../../../assets/824cfebf20f45a92ab5b897445c8ce2f.jpg';

import ResturantCard from "./ResturantCard";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";



const PopularResturants = () => {

    const [restaurants, setRestaurants] = useState([])

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/restaurants').then(res => {
            setRestaurants(res.data)
            console.log(res.data)
        })
    }, [])



    return (
        <div className="mt-20">
            <div className="text-center">

                <div className="uppercase badge bg-orange-100 text-primary font-semibold p-5 rounded-2xl text-xl mb-5">
                    <FaStar />

                    Top Restaurants
                </div>

                <div>

                    <h1 className="text-6xl font-bold">Popular <span className="text-primary">Restaurants</span></h1>

                    <div className="mt-5">
                        <p>Dicover top rated restaurants near you and enjoy <br /> delicuos food delivered fast</p>
                    </div>

                    <div className="flex justify-center mt-5 w-50 items-center mx-auto gap-4 mb-10">
                        <div className="border-t-3 flex-1 border-primary"></div>
                        <BiDish className="text-primary size-9" />

                        <div className="border-t-3 flex-1 border-primary"></div>
                    </div>

                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10">
                    {
                        restaurants.map(resturant => <ResturantCard key={resturant.id} resturant={resturant}></ResturantCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularResturants;