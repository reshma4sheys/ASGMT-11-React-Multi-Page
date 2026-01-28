import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar ()  {
    return(
        <nav className="navbar">
<NavLink to="/" className="nav-link">Home</NavLink>
<NavLink to="/about" className="nav-link">About</NavLink>
<NavLink to="/users" className="nav-link">Users</NavLink>
        </nav>
    );
}

export default Navbar; 

//     const navStyle = () => ({
//         marginRight: '15px',
//         fontWeight: isActive ? 'bold' : 'normal',
//         color: isActive ? '#646cff' : '#213547',
//         textDecoration: 'none'
//     });
//     return (
//         <nav style={{ padding: '1rem', borderBottom: '2px solid #eee', marginBottom: '20px' }}>
//             <NavLink to="/" style={navStyle}>Home</NavLink>
//             <NavLink to="/about" style={navStyle}>About</NavLink>
//             <NavLink to="/users" style={navStyle}>Users</NavLink>

//         </nav>


//     );

// };
  