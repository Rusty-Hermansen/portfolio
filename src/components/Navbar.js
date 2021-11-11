import { NavLink } from "react-router-dom"
import {SocialIcon} from "react-social-icons"

const Navbar = () => {

    return(
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between ">
                <nav className='flex'> 
                    <NavLink to='/' exact 
                    activeClassName='text-yellow-200' 
                    className='inflex-flex items-center py-3 px-3 my-6 text-yellow-700 hover:text-white font-bold '>
                        Rusty Hermansen
                    </NavLink>
                    <NavLink to='/posts' 
                    activeClassName='text-yellow-200' 
                    className='inflex-flex items-center py-3 px-3 my-6 text-yellow-700 hover:text-white font-bold '> 
                        Portfolio Post
                    </NavLink>
                    <NavLink to='about' 
                    activeClassName='text-yellow-200'
                    className='inflex-flex items-center py-3 px-3 my-6 text-yellow-700 hover:text-white  font-bold '>
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/rusty-hermansen/" className="mr-4" target='_blank' fgColor="#fff" style={{height: 35, width:35}} />
                    <SocialIcon url="https://github.com/rusty-hermansen" className="mr-4" target='_blank' fgColor="#fff" style={{height: 35, width:35}} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
