import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";


const CategoryCard = ({ category }) => {
    return (
        <div className="bg-white rounded-3xl mt-10">
            <div className="text-center p-5">

                <div className="bg-[#FEF3E5] rounded-full p-3 mb-3">
                    <img className="pt-5" src={category.image} />
                </div>

                <h2 className="text-2xl font-bold pb-3">{category.name}</h2>

                <p>{category.itemCount}+ Items</p>

                <div className="flex justify-center mt-5">
                    <div className="bg-orange-200 p-3 rounded-full">
                        <Link to='/'><FaArrowRight className="text-primary text-xl" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;