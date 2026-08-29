import React from "react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import Logo from "../../Component/Logo/Logo";
import useAuth from "../../Hooks/useAuth";

const Login = () => {

  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const { logIn, signInWithGoogle } = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => {
      navigate(location?.state || '/')
    })
      .catch(err => {
        console.log(err)
      })
  }

  const handleLogin = (data) => {
    logIn(data.email, data.pass).then(res => {
      console.log(res.user);
      navigate(location?.state || '/');
    })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="min-h-screen bg-[#FEF3E5] flex items-center justify-center p-4">

      <div className="w-full max-w-6xl min-h-[650px] bg-white rounded-3xl overflow-hidden shadow-xl flex">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex md:w-1/2 bg-[#FEF3E5] relative flex-col justify-between p-10 overflow-hidden">

          {/* Logo */}
          <Logo></Logo>

          {/* Text */}
          <div className="relative z-10 mt-10">
            <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
              Delicious food,
              <br />
              <span className="text-orange-500">delivered fast</span>
              <br />
              to your door.
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Order from your favorite restaurants
              and enjoy fast delivery.
            </p>
          </div>

          {/* Food Image */}
          <div className="relative z-10 mt-5 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
              alt="Burger"
              className="w-[90%] max-w-lg rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute top-24 right-16 w-6 h-6 border-4 border-orange-300 rounded-full"></div>

          <div className="absolute top-40 right-28 flex gap-2">
            <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
            <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
            <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16">

          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Welcome Back! 👋
              </h2>

              <p className="mt-2 text-gray-500">
                Login to your FoodRush account
              </p>
            </div>


            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>

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
                    placeholder="Enter your password"
                    className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-300 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />

                  <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />

                </div>
              </div>


              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-orange-500"
                  />

                  <span>Remember me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-orange-500 font-medium hover:text-orange-600"
                >
                  Forgot Password?
                </Link>

              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-xl transition duration-200 shadow-md"
              >
                Login
              </button>

            </form>


            {/* Divider */}
            <div className="flex items-center gap-4 my-7">

              <div className="h-px bg-gray-200 flex-1"></div>

              <span className="text-gray-400 font-medium">
                OR
              </span>

              <div className="h-px bg-gray-200 flex-1"></div>

            </div>


            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full btn h-14 hover:bg-orange-500 hover:text-white border rounded-xl flex items-center justify-center gap-3 font-semibold text-orange-500 transition"
            >
              <FaGoogle className="text-lg" />

              Sign up with Google
            </button>


            {/* Register */}
            <p className="text-center text-gray-500 mt-8">

              Don't have an account?

              <Link
                to="/register"
                className="ml-1 text-orange-500 font-semibold hover:text-orange-600"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;