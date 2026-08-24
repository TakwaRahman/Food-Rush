import { FaCloudUploadAlt } from "react-icons/fa";

const AddFood = () => {
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

                <form>

                    {/* Food Image */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Food Image
                        </h2>

                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-10 text-center hover:border-primary transition">

                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                                    <FaCloudUploadAlt className="text-3xl text-primary" />
                                </div>
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
                                type="file"
                                accept="image/png,image/jpeg"
                                className="hidden"
                            />
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
                                    type="text"
                                    placeholder="e.g. Classic Beef Burger"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Category
                                    </span>
                                </label>

                                <select className="select select-bordered w-full rounded-xl">
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
                                    placeholder="e.g. 250"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>

                            {/* Preparation Time */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Preparation Time
                                    </span>
                                </label>

                                <select className="select select-bordered w-full rounded-xl">
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
                            </div>

                            {/* Food Type */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Food Type
                                    </span>
                                </label>

                                <select className="select select-bordered w-full rounded-xl">
                                    <option value="">
                                        Select Food Type
                                    </option>
                                    <option>Vegetarian</option>
                                    <option>Non-Vegetarian</option>
                                </select>
                            </div>

                            {/* Availability */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Availability
                                    </span>
                                </label>

                                <select className="select select-bordered w-full rounded-xl">
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
                            rows="5"
                            placeholder="Write a short description about this food..."
                            className="textarea textarea-bordered w-full rounded-xl resize-none"
                        ></textarea>

                    </div>

                    {/* Extra Information */}
                    <div className="mb-8">

                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Extra Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Spice Level */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Spice Level
                                    </span>
                                </label>

                                <select className="select select-bordered w-full rounded-xl">
                                    <option>Not Spicy</option>
                                    <option>Mild</option>
                                    <option>Medium</option>
                                    <option>Spicy</option>
                                    <option>Extra Spicy</option>
                                </select>
                            </div>

                            {/* Serving Size */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Serving Size
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="e.g. 1 person"
                                    className="input input-bordered w-full rounded-xl"
                                />
                            </div>

                        </div>
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