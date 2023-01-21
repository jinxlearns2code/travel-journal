import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	return (
		<header>
			<div className="header">
				<FontAwesomeIcon icon={faEarthAsia} className="logo" />
				<p>my travel journal.</p>
			</div>
		</header>
	)
}