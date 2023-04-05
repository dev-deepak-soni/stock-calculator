import { Link } from 'react-router-dom';
import logo from '../../src/img/AMW_Logo.png';

const Header = () => {
    return (
        <div className='h-10 shadow'>
            <div className='grid grid-cols-3'>
                <div><img src={logo} alt='logo' className='w-40 xl:w-30' /></div>
                <div className='font-bold'>Stock Calculator</div>
                <div><Link to='/signup'>Sign Up</Link></div>
            </div>
        </div>
    )
}

export default Header