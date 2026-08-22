
import { TbChefHatFilled } from "react-icons/tb";
import CategoryCard from "./CategoryCard";
import pizzaImg from '../../../assets/pngtree-chickens-pizza-isolated-on-white-transparent-background-png-image_17954168.png';
import burgerImg from '../../../assets/pngtree-crispy-cheesy-chicken-patty-burger-on-transparent-background-png-image_16578920.png';
import chickenFryImg from '../../../assets/pngtree-high-quality-chicken-fry-image-full-transparent-white-background-png-image_20293177.png';
import noodleImg from '../../../assets/pngtree-egg-chow-mein-with-vegetables-and-noodles-on-transparent-background-png-image_20547283.png';
import biryaniImg from '../../../assets/pngtree-indulge-in-flavorful-spices-exquisite-chicken-biryani-on-black-plate-png-image_15611782.png';
import cakeImg from '../../../assets/pngtree-slice-of-chocolate-cake-on-a-plate-representing-delicious-desserts-and-png-image_20308956.png';
import drinkImg from '../../../assets/pngtree-energy-drink-can-with-splash-effect-isolated-on-transparent-background-png-image_21145570.png';


const PopularCategories = () => {


    const categories = [
        {
            id: 1,
            name: "Pizza",
            image: pizzaImg,
            itemCount: 120,
            orderCount: 850,
        },
        {
            id: 2,
            name: "Burger",
            image: burgerImg,
            itemCount: 150,
            orderCount: 720,
        },
        {
            id: 3,
            name: "Chicken",
            image: chickenFryImg,
            itemCount: 100,
            orderCount: 650,
        },
        {
            id: 4,
            name: "Noodles",
            image: noodleImg,
            itemCount: 80,
            orderCount: 540,
        },
        {
            id: 5,
            name: "Biryani",
            image: biryaniImg,
            itemCount: 90,
            orderCount: 590,
        },
        {
            id: 6,
            name: "Desserts",
            image: cakeImg,
            itemCount: 60,
            orderCount: 430,
        },
        {
            id: 7,
            name: "Drinks",
            image: drinkImg,
            itemCount: 70,
            orderCount: 380,
        },
    ];

    return (
        <div className="mt-20">

            <div className="text-center">

                <div className="uppercase badge bg-orange-100 text-primary font-semibold p-5 rounded-2xl text-xl mb-5">
                    What Do You Want to eat?
                </div>

                <div>

                    <h1 className="text-6xl font-bold">Popular <span className="text-primary">Categories</span></h1>

                    <div className="mt-5">
                        <p>Choose from a variety of delicious food categories and <br /> order your favoright in just a few clicks</p>
                    </div>

                    <div className="flex justify-center mt-5 w-50 items-center mx-auto gap-4">
                        <div className="border-t-3 flex-1 border-primary"></div>
                        <TbChefHatFilled className="text-primary text-3xl" />

                        <div className="border-t-3 flex-1 border-primary"></div>
                    </div>

                </div>
            </div>


            <div>
                <div className="grid grid-cols-2 lg:grid-cols-7 gap-5">
                    {categories.map(category => <CategoryCard key={category.id} category={category}>
                    </CategoryCard>)}
                </div>
            </div>


        </div>
    );
};

export default PopularCategories;