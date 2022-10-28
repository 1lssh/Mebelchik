import React from 'react'
import { useState } from 'react/cjs/react.development'

function Login({ setIsAdmin }) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = () => {
		if (login === 'admin' && password === '1234') {
			setIsAdmin(true)
		}
	}
	const handleLoginChange = (e) => {
		let text = e.target.value
		setLogin(text)
	}
	const handlePasswordChange = (e) => {
		let text = e.target.value
		setPassword(text)
	}
	return (
		<div>
			<input value={login} onChange={handleLoginChange} type="text" />
			<input value={password} onChange={handlePasswordChange} type="password" />
			<button onClick={handleSubmit}>Войти</button>
			<button onClick={() => setIsAdmin(false)}>Выйти</button>
		</div>

	)
}

export default Login