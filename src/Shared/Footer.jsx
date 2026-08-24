
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail, MdKeyboardArrowRight, MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router";


const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer sm:footer-horizontal text-white bg-black p-10">
                <aside>
                    <h1 className="text-5xl font-bold italic">Food<span className="text-primary">Rush</span></h1>
                    <p className="w-50 leading-7 mt-5">
                        Delicious Meals

                        fast delivery and great service: that's the FoodRush promise.
                    </p>

                    <div className="flex gap-5 mt-5 ">
                        <div className="border border-primary p-3 rounded-full">
                            <a href="https://www.facebook.com/takwa.rahman2.0/"><FaFacebookF className="" /></a>
                        </div>
                        <div className="border border-primary p-3 rounded-full">
                            <a href="https://www.instagram.com/el__bicho_2.0/"><FaInstagram /></a>
                        </div>
                        <div className="border border-primary p-3 rounded-full">
                            <a href="https://studio.youtube.com/channel/UCVeCmAnM-wHhCWqVg8SnrSQ"><FaYoutube /></a>
                        </div>
                        <div className="border border-primary p-3 rounded-full">
                            <a href=""><FaTwitter /></a>
                        </div>

                    </div>
                </aside>
                <nav>
                    <h6 className="text-xl font-semibold uppercase">Quick Links</h6>
                    <div className="w-12 border-b-3 border-primary"></div>

                    <div className="mt-5 flex flex-col gap-3">
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Home</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Restaurants</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Menu</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Offers</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            About Us</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Contact</Link>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold uppercase">Customer Support</h6>
                    <div className="w-12 border-b-3 border-primary"></div>

                    <div className="mt-5 flex flex-col gap-3">
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Help Center</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            My Orders</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Track Order</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Privacy Policy</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Terms & Conditions</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdKeyboardArrowRight className="size-5 text-primary" />
                            Refund & Returns</Link>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-xl font-semibold uppercase">Contact Us</h6>
                    <div className="w-12 border-b-3 border-primary"></div>

                    <div className="mt-5 flex flex-col gap-3">
                        <Link className="link link-hover flex items-center gap-2"><FaLocationDot className="text-primary" />
                            Dhaka, Bangladesh</Link>
                        <Link className="link link-hover flex items-center gap-2"><FaPhoneAlt className="text-primary" />

                            +880 1721-419881</Link>
                        <Link className="link link-hover flex items-center gap-2"><MdEmail className="text-primary" />

                            srttr4@gmail.com</Link>
                        <div className="flex items-center gap-2"><MdOutlineWatchLater className="text-primary" />
                            <p>9:00 AM - 11:00 PM</p>
                            <p> (Everyday)</p>
                        </div>

                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;