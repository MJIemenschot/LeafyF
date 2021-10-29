import './Logo.css';
import {Link} from 'react-router-dom';
import {GrGrow} from "react-icons/gr";

const Logo = () => {

    return (
        <Link to='/' className='logo'>
            Leafy<span className='logo-icon'>.<GrGrow /></span>

        </Link>
    )
}
export default Logo
