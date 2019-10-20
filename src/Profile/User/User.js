import React from 'react'
import g from '../../General.module.css'
import s from './User.module.css'

const Banner = () => {
    return (
        <div className={s.user__wrap}>
			<div className={s.user__avatar}>
				<img src="https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg" alt="avatar"/>
			</div>
			<div className={s.user__info}>
				<h3 className={s.user__name}>Dmitriy K</h3>
				<ul className={s.user__info_list}>
					<li>
						<span className={s.key}>Date of Birth</span>:
						<span className={s.value}>8 November</span>
					</li>
					<li>
						<span className={s.key}>City</span>:
						<span className={s.value}>Kiev</span>
					</li>
					<li>
						<span className={s.key}>Education</span>:
						<span className={s.value}>NTU '14</span>
					</li>
					<li>
						<span className={s.key}>Web Site</span>:
						<span className={s.value}>
							<a href="test.com">test.com</a>
						</span>
					</li>
				</ul>	
			</div>
		</div>
    )
}

export default Banner