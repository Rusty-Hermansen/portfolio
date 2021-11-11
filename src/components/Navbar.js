import { NavLink } from "react-router-dom"
import {SocialIcon} from "react-social-icons"

const Navbar = () => {

    return(
        <header className="bg-gray-900 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between ">
                <nav className='flex'> 
                    <NavLink to='/' exact 
                    style={{ textDecoration: 'none' }}
                    activeClassName='text-yellow-200' 
                    className='inflex-flex items-center py-2 px-3 my-6 text-yellow-700 hover:text-white font-bold text-2xl'>
                        Rusty Hermansen
                    </NavLink>
                    <NavLink to='/posts' 
                    style={{ textDecoration: 'none' }}
                    activeClassName='text-yellow-200' 
                    className='inflex-flex items-center py-2 px-3 my-6 text-yellow-700 hover:text-white font-bold text-2xl'> 
                        Portfolio Post
                    </NavLink>
                    <NavLink to='about' 
                    style={{ textDecoration: 'none' }}
                    activeClassName='text-yellow-200'
                    className='inflex-flex items-center py-2 px-3 my-6 text-yellow-700 hover:text-white  font-bold text-2xl'>
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-2 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/rusty-hermansen/" className="mr-4" target='_blank' fgColor="#fff" style={{height: 45, width:45}} />
                    <SocialIcon url="https://github.com/rusty-hermansen" className="mr-4" target='_blank' fgColor="#fff" style={{height: 45, width:45}} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
