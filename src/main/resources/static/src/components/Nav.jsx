
import { NavBtn } from "./NavBtn"

export const Nav = ({ setMenuActive }) => {

	return (
		<div>
			<ul className='nav-items'>
				<NavBtn setMenuActive={setMenuActive} route='/' >Главная</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/order' >Заказать</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/gallery' >Галерея</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/contacts' >Контакты</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/login' >Авторизация</NavBtn>
			</ul>
		</div>
	)
}