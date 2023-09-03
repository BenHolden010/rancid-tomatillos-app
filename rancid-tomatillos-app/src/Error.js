import { NavLink } from "react-router-dom"

export default function Error({setError, error}){
 
    setError('Whoops! Something went wrong! page not found. please try another option')

return( 
  <div>
  {error}
  <NavLink to="/">
  <button>Retrun to Home Page</button>
  </NavLink>
  </div>
)
}