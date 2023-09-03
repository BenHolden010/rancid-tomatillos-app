import './Header.css'
import logo from'./rancid-logo.png';
import {NavLink} from 'react-router-dom';

function Header(){
    return (
        <div className='header-container'>
            <NavLink to='/'>
                <img src={logo}/>
            </NavLink>
        </div>
    )

}

export default Header