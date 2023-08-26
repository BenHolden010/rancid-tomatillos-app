import './Header.css'
import logo from'./rancid-logo.png';

function Header(){
    return (
        <div className='header-container'>
            <img src={logo}/>
        </div>
    )

}

export default Header