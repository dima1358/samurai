import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
	return (
		<li className={s.post__item}>
			<img src={props.src} alt="avatar"/>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo vitae officia laboriosam inventore eligendi doloribus architecto saepe. Iusto numquam placeat necessitatibus. Qui doloribus eos libero porro illum, veritatis placeat!</p>
		</li>
	)
}

export default Post