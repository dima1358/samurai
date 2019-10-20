import React from "react"
import g from '../General.module.css'
import s from './Header.module.css'


const Header = () => {
	return (
		<header className={s.header}>
			<a href="#">
				<img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="logo"/>
			</a>
			<ul className={s.menu__list}>
				<li>
					<a href="#">Point 1</a>
				</li>
				<li>
					<a href="#">Point 2</a>
				</li>
				<li>
					<a href="#">Point 3</a>
				</li>
				<li>
					<a href="#">Point 4</a>
				</li>
			</ul>
		</header>
	)
}

export default Header