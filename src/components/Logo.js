import {Link} from 'react-router-dom';
import {GrGrow} from "react-icons/gr";

const Logo = () => {

    return (
        <Link to='/' className='logo'>
            Leafy<span>.<GrGrow /></span>

        </Link>
    )
}
export default Logo
