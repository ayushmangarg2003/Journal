import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { COMPANY_NAME_1, COMPANY_NAME_2 } from '../../assets/data/utils';
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
    const [state, setState] = useState(false);
    const { user } = useAuthContext()


    const handleClick = () => {
        setState(!state)
    }

    return (
        <div className='navbar-parent'>
            <div className="nav-left">
                <Link to={'/'} className='logo-link'>
                    {/* Logo */}
                    <div className="logo-img"><i className="fa-solid fa-book"></i></div>
                    <div className="logo-name">{COMPANY_NAME_1}<p>{COMPANY_NAME_2}</p></div>
                </Link>
            </div>
            {/*  */}
            <div className={state ? "nav-center active" : "nav-center"}>
                {/* Navlinks */}
                <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/'}>Home</Link></div>
                <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/journals'}>Journals</Link></div>
                <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/services'}>Subjects</Link></div>
                <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/about'}>About</Link></div>
                <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/authors'}>Authors</Link></div>
            </div>

            <div className="nav-right">
                {/* Login Btn */}
                {user && (
                    <div>
                        <Link className='user-icon' to={`/profile`}><i className="fa-solid fa-user"></i></Link>
                    </div>
                )}
                {!user && (
                    <div className="login-btn"><Link className='navbar-login-link' to={'/login'}>Login</Link></div>
                )}
                <div className="hamburger-icon" onClick={handleClick}><i className={state ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></div>
            </div>
        </div>
    )
}

export default Navbar