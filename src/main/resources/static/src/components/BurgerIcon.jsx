import React from 'react'

function BurgerIcon({ setMenuActive }) {
	return (
		<div onClick={() => setMenuActive(true)} className="header-burger">
			<span className="burger-line burger-line_first"></span>
			<span className="burger-line burger-line_second"></span>
			<span className="burger-line burger-line_third"></span>
		</div>
	)
}

export default BurgerIcon