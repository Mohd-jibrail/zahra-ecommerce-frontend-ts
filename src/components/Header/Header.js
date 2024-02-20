"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
require("./Header.css");
const Header = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const navRef = (0, react_1.useRef)(null);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (<header className="header">
            <div className="brand-name"><react_router_dom_1.Link to='/'>Zahra House</react_router_dom_1.Link></div>
            <input type="text" placeholder="Search..." className="search-bar"/>
            
            <div className="buttons">
                <react_router_dom_1.Link to='/signUp'><button>SignUp</button></react_router_dom_1.Link>
                <react_router_dom_1.Link to='/signIn'><button>SignIn</button></react_router_dom_1.Link>
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
        </header>);
};
exports.default = Header;
