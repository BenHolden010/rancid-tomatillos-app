import { NavLink } from "react-router-dom"

export default function Error({setError, error}){
 
    setError('Whoops! Something went wrong! page not found. please try another option')

return( 
  <div className='error-container'>
  <p>{error}</p>
  <NavLink className='home-button' to="/">
  <button>Retrun to Home Page</button>
  </NavLink>
  </div>
)
}