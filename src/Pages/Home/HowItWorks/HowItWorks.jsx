import {
    FaArrowRight,
    FaBagShopping,
    FaCartShopping,
    FaUtensils,
} from "react-icons/fa6";

import { TbChefHatFilled } from "react-icons/tb";


const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            title: "Choose Your Food",
            description:
                "Browse restaurants and explore wide variety of delicious food.",
        },
        {
            id: 2,
            title: "Place Your Order",
            description:
                "Add your favorite food to cart and place your order easily.",
        },
        {
            id: 3,
            title: "Track Your Order",
            description:
                "Track your order in real time and know when it will arrive.",
        },
        {
            id: 4,
            title: "Enjoy Your Meal",
            description:
                "Sit back, relax and enjoy your delicious meal at your doorstep.",
        },
    ];


    return (

        <section className="mt-24 mx-5">

            {/* ================= HEADER ================= */}

            <div className="text-center">

                {/* Badge */}

                <div className="badge bg-orange-100 text-primary border-none px-5 py-4 text-sm font-bold gap-2">

                    <FaUtensils />

                    HOW IT WORKS

                </div>


                {/* Heading */}

                <h1 className="text-5xl md:text-6xl font-bold mt-4">

                    How{" "}

                    <span className="text-primary">
                        FoodRush
                    </span>{" "}

                    Works

                </h1>


                {/* Icon Line */}

                <div className="flex justify-center items-center gap-3 mt-5">

                    <div className="w-16 border-t-3 border-primary"></div>

                    <TbChefHatFilled className="text-primary text-3xl" />

                    <div className="w-16 border-t-3 border-primary"></div>

                </div>


                {/* Description */}

                <p className="text-gray-500 mt-4">

                    Delicious food, delivered to your doorstep in simple steps

                </p>

            </div>



            {/* ================= STEPS ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                {steps.map((step) => (

                    <div
                        key={step.id}
                        className="
                            bg-white
                            border border-gray-100
                            rounded-3xl
                            p-6
                            text-center
                            shadow-sm
                            hover:shadow-xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            relative
                        "
                    >

                        {/* ================= STEP NUMBER ================= */}

                        <div
                            className="
                                absolute
                                top-5
                                left-5
                                w-12
                                h-12
                                rounded-full
                                bg-orange-100
                                flex
                                items-center
                                justify-center
                                text-primary
                                text-xl
                                font-bold
                            "
                        >

                            {String(step.id).padStart(2, "0")}

                        </div>



                        {/* ================= IMAGE PLACE ================= */}

                        <div
                            className="
                                w-56
                                h-52
                                mx-auto
                                mt-5
                                rounded-full
                                bg-orange-50
                                flex
                                items-center
                                justify-center
                            "
                        >

                            {/* Image will be added here later */}

                        </div>



                        {/* ================= TITLE ================= */}

                        <h2 className="text-2xl font-bold mt-6">

                            {step.title}

                        </h2>



                        {/* ================= DESCRIPTION ================= */}

                        <p className="text-gray-600 mt-3 leading-7">

                            {step.description}

                        </p>



                        {/* ================= BOTTOM LINE ================= */}

                        <div
                            className="
                                w-16
                                h-1
                                bg-primary
                                rounded-full
                                mx-auto
                                mt-6
                            "
                        ></div>

                    </div>

                ))}

            </div>



            {/* ================= CTA ================= */}

            <div
                className="
                    mt-10
                    bg-orange-50
                    rounded-3xl
                    p-8
                    md:p-10
                    overflow-hidden
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        items-center
                        justify-between
                        gap-8
                    "
                >

                    {/* ================= LEFT CONTENT ================= */}

                    <div>

                        <h2 className="text-3xl md:text-4xl font-bold">

                            Hungry?

                            <span className="text-primary">

                                {" "}Let's Get Started!

                            </span>

                        </h2>


                        <p className="text-gray-600 mt-3">

                            Order your favorite food now and enjoy
                            fast delivery at your doorstep.

                        </p>



                        {/* ================= BUTTONS ================= */}

                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                gap-4
                                mt-6
                            "
                        >

                            <button
                                className="
                                    btn
                                    bg-primary
                                    hover:bg-orange-600
                                    text-white
                                    border-none
                                    px-7
                                "
                            >

                                <FaBagShopping />

                                Order Now

                                <FaArrowRight />

                            </button>



                            <button
                                className="
                                    btn
                                    btn-outline
                                    border-primary
                                    text-primary
                                    hover:bg-primary
                                    hover:text-white
                                    px-7
                                "
                            >

                                <FaCartShopping />

                                Browse Restaurants

                            </button>

                        </div>

                    </div>



                    {/* ================= FOOD IMAGE PLACE ================= */}

                    <div
                        className="
                            w-full
                            lg:w-96
                            flex
                            justify-center
                        "
                    >

                        <div
                            className="
                                w-72
                                h-52
                                bg-orange-100
                                rounded-full
                            "
                        >

                            {/* Food image will be added here later */}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default HowItWorks;