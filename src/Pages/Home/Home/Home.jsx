
import Banner from "../Banner/Banner";
import CustomerReviews from "../CustomerReviews/CustomerReviews";

import HowItWorks from "../HowItWorks/HowItWorks";
import PopularCategories from "../PopularCategories/PopularCategories";
import PopularFoods from "../PopularFoods/PopularFoods";
import PopularResturants from "../PopularResturants/PopularResturants";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import WhyChooseFoodRush from "../WhyChooseFoodRush/WhyChooseFoodRush";


const Home = () => {
    return (
        <div>
            <div className="bg-[#FEF3E5] pb-10">
                <div className=""><Banner></Banner></div>
                <PopularCategories></PopularCategories>
                <PopularResturants></PopularResturants>
                <PopularFoods></PopularFoods>
                <SpecialOffers></SpecialOffers>
                <WhyChooseFoodRush></WhyChooseFoodRush>
                <CustomerReviews></CustomerReviews>
                <HowItWorks></HowItWorks>
            </div>
        </div>
    );
};

export default Home;