import { NavLink } from "react-router-dom"

const Nav = () => { 
    return (
        <nav className="navbar">
            <div>
            <NavLink to="/about">About</NavLink>
               <NavLink to="/">Disney Adults</NavLink>
            </div>
        </nav>
    )
}

export default Nav