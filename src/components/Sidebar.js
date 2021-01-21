import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='sidebar'>
            <h1>Navigation</h1>
            <ul className='menu'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;