import axios from "axios";
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const AddFood = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const [imagePreview, setImagePreview] = useState(null);

    const location = useLocation();

    const navigate = useNavigate();


    const axiosSecure = useAxiosSecure();

    const { onChange: photoOnChange, ...photoRegister } = register("photo", { required: true });


    const handleAddFood = (data) => {
        const foodImg = data.photo?.[0];

        const formData = new FormData();

        formData.append('image', foodImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

        axios.post(image_API_URL, formData)
            .then(res => {
                console.log('image uploaded', res.data)



                navigate(location.state || '/')

                const foodInfo = {
                    name: data.FoodName,
                    foodPhoto: res.data.data.display_url,
                    category: data.foodCategory,
                    price: data.foodPrice,
                    preparationTime: data.time,
                    foodType: data.foodType,
                    availability: data.availability,
                    description: data.description
                }


                axiosSecure.post('/foods', foodInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('Your Product created in the data')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your food added",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })
            })
            .catch(err => {
                console.log("Message:", err.message);
                console.log("ImgBB Error:", err.response?.data?.error);
                console.log("ImgBB Error Message:", err.response?.data?.error?.message);
                console.log("ImgBB Full Data:", err.response?.data);
            })
    }

    return (
        <div className="min-h-screen bg-base-200 p-4 md:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Add New Food
                </h1>

                <p className="text-gray-500 mt-1">
                    Add a new delicious item to your restaurant menu.
                </p>
            </div>

            {/* Main Form */}
            <div className="bg-white rounded-2xl shadow-sm p-5 md:p-8">

                <form onSubmit={handleSubmit(handleAddFood)}>

                    {/* Food Image */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Food Image
                        </h2>

                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-10 text-center hover:border-primary transition">



                            <div className="flex justify-center mb-4">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Food Preview"
                                        className="w-40 h-40 object-cover rounded-2xl shadow-md"
                                    />
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                                        <FaCloudUploadAlt className="text-3xl text-primary" />
                                    </div>
                                )}
                            </div>


                            <h3 className="font-semibold text-gray-700">
                                Upload Food Image
                            </h3>

                            <p className="text-sm text-gray-400 mt-1">
                                PNG, JPG or JPEG (Max 5MB)
                            </p>

                            <label
                                htmlFor="foodImage"
                                className="btn btn-primary text-white mt-4 rounded-xl"
                            >
                                Choose Image
                            </label>

                            <input
                                id="foodImage"
                                {...photoRegister}
                                type="file"
                                accept="image/png,image/jpeg"
                                className="hidden"
                                onChange={(e) => {
                                    photoOnChange(e)
                                    const file = e.target.files[0]

                                    if (file) {
                                        setImagePreview(URL.createObjectURL(file));
                                    }
                                }}
                            />
                            {errors.photo?.type === 'required' && <p className="text-red-500 mt-5">Food image is required</p>}
                        </div>
                    </div>

                    {/* Food Information */}
                    <div className="mb-8">

                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Food Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Food Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Food Name
                                    </span>
                                </label>

                                <input
                                    {...register("FoodName", { required: true })}
                                    type="text"
                                    placeholder="e.g. Classic Beef Burger"
                                    className="input input-bordered w-full rounded-xl"
                                />
                                {errors.FoodName?.type === 'required' && <p className="text-red-500">Name is required</p>}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Category
                                    </span>
                                </label>

                                <select className="select select-bordered w-full rounded-xl" {...register('foodCategory', { required: true })}>
                                    <option value="">
                                        Select Category
                                    </option>
                                    <option>Pizza</option>
                                    <option>Burger</option>
                                    <option>Chicken</option>
                                    <option>Biryani</option>
                                    <option>Noodles</option>
                                    <option>Drinks</option>
                                    <option>Dessert</option>
                                </select>

                                {errors.foodCategory?.type === 'required' && <p className="text-red-500">Category is required</p>}
                            </div>

                            {/* Price */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Price
                                    </span>
                                </label>

                                <input
                                    type="number"
                                    {...register('foodPrice', { required: true })}
                                    placeholder="e.g. 250"
                                    className="input input-bordered w-full rounded-xl"
                                />
                                {errors.foodPrice?.type === 'required' && <p className="text-red-500">Price is required</p>}
                            </div>

                            {/* Preparation Time */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Preparation Time
                                    </span>
                                </label>

                                <select {...register('time', { required: true })} className="select select-bordered w-full rounded-xl">
                                    <option value="">
                                        Select Time
                                    </option>
                                    <option>10 Minutes</option>
                                    <option>15 Minutes</option>
                                    <option>20 Minutes</option>
                                    <option>30 Minutes</option>
                                    <option>45 Minutes</option>
                                    <option>60 Minutes</option>
                                </select>

                                {errors.time?.type === 'required' && <p className="text-red-500">Time is required</p>}
                            </div>

                            {/* Food Type */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Food Type
                                    </span>
                                </label>

                                <select {...register('foodType', { required: true })} className="select select-bordered w-full rounded-xl">
                                    <option value="">
                                        Select Food Type
                                    </option>
                                    <option>Vegetarian</option>
                                    <option>Non-Vegetarian</option>
                                </select>

                                {errors.foodType?.type === 'required' && <p className="text-red-500">Foodtype is required</p>}
                            </div>

                            {/* Availability */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Availability
                                    </span>
                                </label>

                                <select {...register('availability')} className="select select-bordered w-full rounded-xl">
                                    <option>Available</option>
                                    <option>Unavailable</option>
                                </select>

                            </div>

                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">

                        <label className="label">
                            <span className="label-text font-semibold text-lg">
                                Food Description
                            </span>
                        </label>

                        <textarea
                            {...register('description', { required: true })}
                            rows="5"
                            placeholder="Write a short description about this food..."
                            className="textarea textarea-bordered w-full rounded-xl resize-none"
                        ></textarea>

                        {errors.description?.type === 'required' && <p className="text-red-500">Description is required</p>}

                    </div>



                    {/* Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-5 border-t">

                        <button
                            type="button"
                            className="btn btn-outline rounded-xl px-8"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="btn btn-primary text-white rounded-xl px-8"
                        >
                            Add Food
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddFood;