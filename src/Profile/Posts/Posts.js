import React from 'react'
import Post from './Post/Post.js'
import s from './Posts.module.css'

const Posts = () => {
	return (
		<div className={s.posts__wrap}>
			<h3 className={s.posts__title}>My posts</h3>
			<div className={s.posts__chat}>
				<form action="">
					<textarea type="text" className={s.posts__chat_input}/>
					<input type="submit" value='Send' className='btn'/>
				</form>
				<ul className={s.posts__chat_list}>
					<Post src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg'/>
					<Post src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN0lRPTr4wi0FzTNQOdndPuUjEMpqD0jehYcWYDYAXSp1IU65'/>
				</ul>
			</div>
		</div>
	)
}

export default Posts