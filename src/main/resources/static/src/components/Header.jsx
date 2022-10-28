import React, { useState } from 'react'
import BurgerIcon from './BurgerIcon'
import CloseIcon from './CloseIcon'
import { Logo } from './Logo'
import { Nav } from './Nav'

function Header() {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<>
			<div className='header'>
				<div className='logo'>
					<Logo />
					<BurgerIcon setMenuActive={setMenuActive} />
				</div>
			</div>
			<div className='nav-wrapper'>
				<nav className={menuActive ? 'nav nav-active' : 'nav'}>
					<Nav setMenuActive={setMenuActive} />
					<CloseIcon setMenuActive={setMenuActive} />
				</nav>
			</div>
		</>
	)
}

export default Header
