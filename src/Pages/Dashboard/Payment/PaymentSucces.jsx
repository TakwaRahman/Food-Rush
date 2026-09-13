import { Lottie } from 'lottie-react';
import successAnime from '../../../assets/Success.json';
import { Link } from 'react-router';


const PaymentSucces = () => {
    return (
        <div >
            <div className='size-100 mx-auto'>
                <Lottie src={successAnime} autoplay loop></Lottie>
            </div>

            <div className='text-center -mt-20 text-3xl'>
                <p>You are payment successfully</p>
            </div>

            <div>
                <button className="btn">
                    <Link to="/">Go To Home</Link>
                </button>
            </div>
        </div>
    );
};

export default PaymentSucces;