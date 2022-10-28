import React from 'react'

function CloseIcon({ setMenuActive }) {
	return (
		<div className="nav-close" onClick={() => setMenuActive(false)}>
			<span className="nav-close-line"></span>
			<span className="nav-close-line"></span>
		</div>
	)
}

export default CloseIcon