import { Lottie } from 'lottie-react';
import successAnime from '../../../assets/Success.json';
import { Link, useSearchParams } from 'react-router';
import { useEffect } from 'react';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';

const PaymentSucces = () => {

    const [searchParams] = useSearchParams();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {

        const sessionId = searchParams.get('session_id');

        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log('Payment Success:', res.data);
                })
                .catch(error => {
                    console.error('Payment Success Error:', error);
                });
        }

    }, [searchParams, axiosSecure]);

    return (
        <div>

            <div className='size-100 mx-auto'>
                <Lottie
                    src={successAnime}
                    autoplay
                    loop
                />
            </div>

            <div className='text-center -mt-20 text-3xl'>
                <p>Your payment was successful</p>
            </div>

            <div className='text-center mt-5'>
                <Link to="/" className="btn">
                    <button>Go To Home</button>
                </Link>
            </div>

        </div>
    );
};

export default PaymentSucces;