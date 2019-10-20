import React from 'react'
import g from '../General.module.css'
import s from './Sidebar.module.css'

const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<ul className={s.nav__list}>
				<li>
					<a href="#">Menu-item</a>
				</li>
				<li>
					<a href="#">Menu-item</a>
				</li>
				<li>
					<a href="#">Menu-item</a>
				</li>
				<li>
					<a href="#">Menu-item</a>
				</li>
				<li>
					<a href="#">Menu-item</a>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar