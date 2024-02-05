import { NavLink } from "react-router-dom"

const Nav = () => { 
    return (
        <nav className="navbar">
            <div>
               <NavLink to="/">Disney Adults</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="new">Add your Disney Accessories</NavLink>
            </div>
        </nav>
    )
}

export default Nav