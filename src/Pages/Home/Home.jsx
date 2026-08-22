import Banner from "./Banner/Banner";
import PopularCategories from "./PopularCategories/PopularCategories";
import PopularFoods from "./PopularFoods/PopularFoods";
import PopularResturants from "./PopularResturants/PopularResturants";
import SpecialOffers from "./SpecialOffers/SpecialOffers";


const Home = () => {
    return (
        <div>
            <div className="bg-[#FEF3E5] pb-10">
                <div className=""><Banner></Banner></div>
                <PopularCategories></PopularCategories>
                <PopularResturants></PopularResturants>
                <PopularFoods></PopularFoods>
                <SpecialOffers></SpecialOffers>
            </div>
        </div>
    );
};

export default Home;