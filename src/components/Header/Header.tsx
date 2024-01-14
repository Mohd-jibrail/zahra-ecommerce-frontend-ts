import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: { target: any; }) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <header className="header">
            <div className="brand-name"><Link to='/'>Zahra House</Link></div>
            <input type="text" placeholder="Search..." className="search-bar"/>
            
            <div className="buttons">
                <Link to='/signUp'><button>SignUp</button></Link>
                <Link to='/signIn'><button>SignIn</button></Link>
                <button onClick={toggleNav} className="profile-icon">Profile</button>
                <div>
                    <div ref={navRef} className={`side-nav ${isOpen ? 'open' : ''}`}>
                    <button onClick={toggleNav} className="close-btn">X</button>
                    <ul>
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                   </div>
               </div>
            </div>
        </header>
    );
};

export default Header;
