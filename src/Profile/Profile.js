import React from 'react'
import g from '../General.module.css'
import s from './Profile.module.css'
import Banner from './Banner/Banner.js'
import User from './User/User.js'
import Posts from './Posts/Posts.js'

const Profile = () => {
	return (
		<div className={s.profile__wrap}>
			<Banner />
			<User />
			<Posts />
		</div>
	)
}

export default Profile