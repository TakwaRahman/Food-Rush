import { BiDish } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import burgerImg from '../../../assets/8c27e9da862d35e6835442dc94b055f7.jpg';
import burgerLogo from '../../../assets/824cfebf20f45a92ab5b897445c8ce2f.jpg';

import ResturantCard from "./ResturantCard";



const PopularResturants = () => {

    const restaurants = [
        {
            id: 1,
            name: "Burger House",
            image: burgerImg,
            logo: burgerLogo,
            rating: 4.8,
            cuisine: "Fast Food",
            specialty: "Burgers",
            deliveryTime: "20-30 min",
            location: "Dhanmondi, Dhaka",
            orderCount: 1250,
        },
        {
            id: 2,
            name: "Pizza Lover",
            image: "/restaurants/pizza-lover.jpg",
            logo: "/restaurants/logos/pizza-lover.png",
            rating: 4.7,
            cuisine: "Italian",
            specialty: "Pizza",
            deliveryTime: "25-35 min",
            location: "Banani, Dhaka",
            orderCount: 1100,
        },
        {
            id: 3,
            name: "Biryani Express",
            image: "/restaurants/biryani-express.jpg",
            logo: "/restaurants/logos/biryani-express.png",
            rating: 4.6,
            cuisine: "Indian",
            specialty: "Biryani",
            deliveryTime: "30-40 min",
            location: "Uttara, Dhaka",
            orderCount: 980,
        },
        {
            id: 4,
            name: "Chicken Crunch",
            image: "/restaurants/chicken-crunch.jpg",
            logo: "/restaurants/logos/chicken-crunch.png",
            rating: 4.7,
            cuisine: "Fast Food",
            specialty: "Fried Chicken",
            deliveryTime: "20-30 min",
            location: "Mirpur, Dhaka",
            orderCount: 920,
        },
        {
            id: 5,
            name: "Pasta Point",
            image: "/restaurants/pasta-point.jpg",
            logo: "/restaurants/logos/pasta-point.png",
            rating: 4.5,
            cuisine: "Italian",
            specialty: "Pasta",
            deliveryTime: "25-35 min",
            location: "Gulshan, Dhaka",
            orderCount: 760,
        },
        {
            id: 6,
            name: "Sweet Tooth",
            image: "/restaurants/sweet-tooth.jpg",
            logo: "/restaurants/logos/sweet-tooth.png",
            rating: 4.6,
            cuisine: "Desserts",
            specialty: "Cakes",
            deliveryTime: "15-25 min",
            location: "Dhanmondi, Dhaka",
            orderCount: 680,
        },
    ];



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