import React from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../Component/Logo/Logo";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Component/context/AuthContext";
import second from '../../Hooks/useAuth'
import useAuth from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { auth } from "../../firebase/firebase.init";


const Register = () => {

    const { register, requeird, handleSubmit, control, formState: { errors } } = useForm()
    const axiosSecure = useAxiosSecure();

    const { user, signInWithGoogle, createUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleRegister = () => {
        signInWithGoogle()
            .then(res => {

                const user = res.user;

                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }

                axiosSecure.post('/users', userInfo).then(res => {
                    if (res.data.insertedId) {
                        console.log('user created in the data')
                    }
                })

                navigate(location?.state || '/')
                console.log("Google Register", res.user)
            })
            .catch(err => {
                console.log(err.massege)
            })
    }

    const handleRegister = (data) => {
        createUser(data.email, data.pass).then(res => {

            if (data.pass === data.confirmPass) {

            }

            const userInfo = {
                name: data.name,
                email: data.email,
                pass: data.pass,
                phoneNumber: data.phone
            }


            axiosSecure.post('/users', userInfo).then(res => {
                if (res.data.insertedId) {
                    console.log('user created in the data')
                }
            })

            navigate(location?.state || '/')

        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="min-h-screen bg-[#FEF3E5] flex items-center justify-center p-4">

            <div className="w-full max-w-6xl min-h-[650px] bg-white rounded-3xl overflow-hidden shadow-xl flex">

                {/* ================= LEFT SIDE ================= */}
                <div className="hidden md:flex md:w-2/5 bg-[#FEF3E5] flex-col justify-between p-10 relative overflow-hidden">

                    {/* Logo */}
                    <Logo></Logo>

                    {/* Text */}
                    <div className="relative z-10">
                        <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
                            Delicious food,
                            <br />
                            <span className="text-orange-500">delivered fast</span>
                            <br />
                            to your door.
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 max-w-sm">
                            Join FoodRush and enjoy food from
                            your favorite restaurants.
                        </p>
                    </div>

                    {/* Food Image */}
                    <div className="relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
                            alt="Food"
                            className="w-full rounded-3xl shadow-lg"
                        />
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-28 right-12 w-7 h-7 border-4 border-orange-300 rounded-full" />

                    <div className="absolute top-40 right-24 grid grid-cols-3 gap-2">
                        <span className="w-2 h-2 bg-orange-300 rounded-full" />
                        <span className="w-2 h-2 bg-orange-300 rounded-full" />
                        <span className="w-2 h-2 bg-orange-300 rounded-full" />
                        <span className="w-2 h-2 bg-orange-300 rounded-full" />
                        <span className="w-2 h-2 bg-orange-300 rounded-full" />
                        <span className="w-2 h-2 bg-orange-300 rounded-full" />
                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="w-full md:w-3/5 flex items-center justify-center p-6 sm:p-10 lg:p-12">

                    <div className="w-full max-w-2xl">

                        {/* Top Login */}
                        <div className="flex justify-end mb-4 text-sm sm:text-base">
                            <p className="text-gray-500">
                                Already have an account?
                                <Link
                                    to="/login"
                                    className="ml-2 text-orange-500 font-semibold hover:text-orange-600"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>


                        {/* Heading */}
                        <div className="mb-7">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Create Account 👤
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Sign up to get started with FoodRush
                            </p>
                        </div>


                        {/* Register Form */}
                        <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>

                            {/* Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* Full Name */}
                                <div>
                                    <label className="block mb-2 font-semibold text-gray-800">
                                        Full Name
                                    </label>

                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                        <input
                                            type="text"
                                            {...register('name', { required: true })}
                                            placeholder="Enter your full name"
                                            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                                        />
                                        {
                                            errors.name?.type === 'required' && <p className="text-red-500">Please enter your name</p>
                                        }
                                    </div>
                                </div>


                                {/* Email */}
                                <div>
                                    <label className="block mb-2 font-semibold text-gray-800">
                                        Email Address
                                    </label>

                                    <div className="relative">
                                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                        <input
                                            type="email"
                                            {...register('email', { required: true })}
                                            placeholder="Enter your email"
                                            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                                        />

                                        {errors.email?.type === 'required' && <p className="text-red-500">Please enter your email</p>}
                                    </div>
                                </div>

                            </div>


                            {/* Phone */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-800">
                                    Phone Number
                                </label>

                                <div className="relative">
                                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="tel"
                                        {...register('phone', { required: true })}
                                        placeholder="Enter your phone number"
                                        className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                                    />
                                    {errors.phone?.type === 'required' && <p className="text-red-500">Please enter your phone number</p>}
                                </div>
                            </div>


                            {/* Password */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-800">
                                    Password
                                </label>

                                <div className="relative">

                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="password"
                                        {...register('pass', { required: true })}
                                        placeholder="Create a password"
                                        className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                                    />
                                    {errors.pass?.type === 'required' && <p className="text-red-500">Please create password</p>}

                                    <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />

                                </div>
                            </div>


                            {/* Confirm Password */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-800">
                                    Confirm Password
                                </label>

                                <div className="relative">

                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="password"
                                        {...register('confirmPass', {
                                            required: true,
                                            validate: (value, formValue) => {
                                                return value === formValue.pass || "Password do not match"
                                            }
                                        })}
                                        placeholder="Confirm your password"
                                        className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                                    />
                                    {errors.confirmPass?.type === 'required' && <p className="text-red-500">Please enter create password</p>}
                                    {errors.confirmPass && (
                                        <p className="text-red-500 text-sm mt-1">{errors.confirmPass.message}</p>
                                    )}

                                    <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />

                                </div>
                            </div>


                            {/* Terms */}
                            <div className="flex items-start gap-3 text-sm text-gray-600">

                                <input
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 accent-orange-500"
                                />

                                <p>
                                    I agree to the{" "}
                                    <Link
                                        to="/terms"
                                        className="text-orange-500 font-medium"
                                    >
                                        Terms & Conditions
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        to="/privacy"
                                        className="text-orange-500 font-medium"
                                    >
                                        Privacy Policy
                                    </Link>
                                </p>

                            </div>


                            {/* Create Account */}
                            <button
                                type="submit"

                                className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-xl transition duration-200 shadow-md"
                            >
                                Create Account
                            </button>

                        </form>


                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6">

                            <div className="h-px bg-gray-200 flex-1" />

                            <span className="text-gray-400 font-medium">
                                OR
                            </span>

                            <div className="h-px bg-gray-200 flex-1" />

                        </div>


                        {/* Google Signup */}
                        <button
                            onClick={handleGoogleRegister}
                            type="button"
                            className="w-full btn h-14 hover:bg-orange-500 hover:text-white border rounded-xl flex items-center justify-center gap-3 font-semibold text-orange-500 transition"
                        >
                            <FaGoogle className="text-lg" />

                            Sign up with Google
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;