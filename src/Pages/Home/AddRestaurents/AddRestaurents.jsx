import { useState } from "react";
import {
    FaCloudArrowUp,
    FaUtensils,
    FaLocationDot,
    FaPhone,
    FaStar,
    FaClock,
} from "react-icons/fa6";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddRestaurents = () => {
    const [restaurantImage, setRestaurantImage] = useState(null);
    const [restaurantImagePreview, setRestaurantImagePreview] = useState(null);

    const [coverImage, setCoverImage] = useState(null);
    const [coverImagePreview, setCoverImagePreview] = useState(null);

    const { register, handleSubmit, control, formState: { errors } } = useForm()

    const axiosSecure = useAxiosSecure();

    const handleRestaurantImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setRestaurantImage(file)
            setRestaurantImagePreview(URL.createObjectURL(file));
        }
    };

    const handleCoverImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setCoverImage(file)
            setCoverImagePreview(URL.createObjectURL(file));
        }
    };

    const handleData = async (data) => {
        const restaurantImg = data.restaurantImage?.[0];
        const coverImg = data.restaurantCoverImage?.[0];

        // restaurant image

        const restaurantFormData = new FormData();

        restaurantFormData.append('image', restaurantImage);

        const restaurantRes = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`, restaurantFormData);

        const restaurantImageUrl = restaurantRes.data.data.display_url;


        // restaurant cover image

        const coverFormData = new FormData();

        coverFormData.append('image', coverImage);

        const coverRes = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`, coverFormData);

        const coverImageUrl = coverRes.data.data.display_url;




        const restaurantData = {
            name: data.name,
            cuisine: data.cuisine,
            location: data.location,
            phone: data.phone,
            deliveryTime: data.time,
            description: data.description,
            restaurantImage: restaurantImageUrl,
            coverImage: coverImageUrl,
            rating: data.rating
        };

        axiosSecure.post('/restaurants', restaurantData).then(res => {
            console.log(res.data)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your food added",
                showConfirmButton: false,
                timer: 1500
            });

        }).catch(err => console.log(err))

        console.log(restaurantData);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Add Restaurant
                </h1>

                <p className="text-gray-500 mt-1">
                    Add a new restaurant to the platform
                </p>
            </div>

            {/* Main Card */}
            <form
                onSubmit={handleSubmit(handleData)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Restaurant Information
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        {/* Restaurant Name */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Restaurant Name <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <FaUtensils className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    name="name"
                                    {...register('name')}
                                    placeholder="Enter restaurant name"
                                    required
                                    className="input input-bordered w-full pl-11"
                                />
                            </div>
                        </div>

                        {/* Cuisine */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Cuisine Type <span className="text-red-500">*</span>
                            </label>

                            <select
                                name="cuisine"
                                required
                                className="select select-bordered w-full"
                                {...register('cuisine')}
                            >
                                <option value="">Select cuisine type</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Fast Food">Fast Food</option>
                                <option value="Italian">Italian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Indian">Indian</option>
                                <option value="Thai">Thai</option>
                            </select>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Location <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    {...register('location')}
                                    name="location"
                                    placeholder="Enter restaurant location"
                                    required
                                    className="input input-bordered w-full pl-11"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Phone Number
                            </label>

                            <div className="relative">
                                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="tel"
                                    name="phone"
                                    {...register('phone')}
                                    placeholder="Enter phone number"
                                    className="input input-bordered w-full pl-11"
                                />
                            </div>
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Rating
                            </label>

                            <div className="relative">
                                <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />

                                <select
                                    name="rating"
                                    className="select select-bordered w-full pl-11"
                                    {...register('rating')}
                                >
                                    <option value="5">5.0</option>
                                    <option value="4.9">4.9</option>
                                    <option value="4.8">4.8</option>
                                    <option value="4.7">4.7</option>
                                    <option value="4.6">4.6</option>
                                    <option value="4.5">4.5</option>
                                    <option value="4.0">4.0</option>
                                </select>
                            </div>
                        </div>

                        {/* Delivery Time */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Delivery Time (mins)
                            </label>

                            <div className="relative">
                                <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <select
                                    {...register('time')}
                                    defaultValue=""
                                    className="select select-bordered w-full pl-11"
                                >
                                    <option value="" disabled>
                                        Select delivery time
                                    </option>
                                    <option >20 Minutes</option>
                                    <option >25 Minutes</option>
                                    <option >30 Minutes</option>
                                    <option>35 Minutes</option>
                                    <option >40 Minutes</option>
                                    <option >45 Minutes</option>
                                    <option >50 Minutes</option>
                                    <option >55 Minutes</option>
                                    <option >60 Minutes</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        {/* Restaurant Image */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Restaurant Image{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <label className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex items-center justify-center cursor-pointer hover:bg-gray-50 overflow-hidden">

                                {restaurantImage ? (
                                    <img
                                        src={restaurantImagePreview}
                                        alt="Restaurant preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <FaCloudArrowUp className="text-4xl text-blue-500 mx-auto mb-3" />

                                        <p className="font-medium">
                                            Click to upload image
                                        </p>

                                        <p className="text-sm text-gray-400 mt-1">
                                            or drag and drop
                                        </p>

                                        <p className="text-xs text-gray-400 mt-3">
                                            PNG, JPG up to 5MB
                                        </p>
                                    </div>
                                )}

                                <input
                                    type="file"
                                    accept="image/png,image/jpeg"
                                    onChange={handleRestaurantImage}

                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Cover Image */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Cover Image
                            </label>

                            <label className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex items-center justify-center cursor-pointer hover:bg-gray-50 overflow-hidden">

                                {coverImage ? (
                                    <img
                                        src={coverImagePreview}
                                        alt="Cover preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <FaCloudArrowUp className="text-4xl text-blue-500 mx-auto mb-3" />

                                        <p className="font-medium">
                                            Click to upload cover image
                                        </p>

                                        <p className="text-sm text-gray-400 mt-1">
                                            or drag and drop
                                        </p>

                                        <p className="text-xs text-gray-400 mt-3">
                                            PNG, JPG up to 5MB
                                        </p>
                                    </div>
                                )}

                                <input
                                    type="file"
                                    accept="image/png,image/jpeg"
                                    onChange={handleCoverImage}

                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Description <span className="text-red-500">*</span>
                            </label>

                            <textarea
                                {...register('description')}
                                name="description"
                                required
                                rows="5"
                                placeholder="Enter restaurant description"
                                className="textarea textarea-bordered w-full resize-none"
                            ></textarea>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 mt-8 pt-6 flex justify-end gap-4">

                    <button
                        type="button"
                        className="btn bg-gray-100 border-none px-8"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-8"
                    >
                        Add Restaurant
                    </button>

                </div>

            </form>
        </div>
    );
};

export default AddRestaurents;