import { useNavigation } from 'react-router';
import loader from '../../assets/logo.png'
const Loading = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    
    if(!isLoading) {
        return null;
    };


    return (
        <div className='flex justify-center items-center gap-4'>
            <img className='w-[100px] h-[100px]' src={loader} alt="loading logo" />
            <p>Loading....</p>
        </div>
    );
};

export default Loading;