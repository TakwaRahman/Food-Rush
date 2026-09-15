import { Lottie } from "lottie-react";
import loading from '../../assets/loading.json';


const Loading = () => {
    return (
        <div className="w-70 mx-auto">
            <Lottie
                src={loading}
                autoplay
                loop
            />
        </div>
    );
};

export default Loading;