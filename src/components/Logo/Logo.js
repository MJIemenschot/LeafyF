import './Logo.css';
import {Link} from 'react-router-dom';
import {GrGrow} from "react-icons/gr";
import Leafy from '../../assets/Leafybeeldmerk.png';


const Logo = () => {

    return (
        <div className='icon-link'>

            <Link to='/' className='logo'>
                 Leafy<span ><img src={Leafy} alt='leafy' className='logo-icon'/></span>
            </Link>

        </div>

    )
}
export default Logo
