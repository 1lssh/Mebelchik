import { NavLink } from "react-router-dom"

export const NavBtn = ({ setMenuActive, children, route }) => {
	return (
		<li
			onClick={() => setMenuActive(false)}
			className='nav-item'
		>
			<NavLink
				className={({ isActive }) => "link" + (isActive ? " activeLink" : "")}
				to={route}
			>
				{children}
			</NavLink>
		</li>
	)
}