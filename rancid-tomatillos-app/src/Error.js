import './Error.css'
import { NavLink } from "react-router-dom"
import errorimg from './errorimage.webp'

export default function Error({error}){
return ( 
  <div className='error-container'>
  <p>{error}</p>
  <NavLink className='home-button' to="/">
  <button>Return to Home Page</button>
  </NavLink>
  <img className='error-pic' src={errorimg}></img>
  </div>
)
}