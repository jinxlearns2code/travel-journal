import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Body(props) {
	return (
		<div>
			<div className="body">
				<img
					src={`images/${props.imageUrl}`}
					className="body--image"
				/>
				<div className="body--info">
					<section className="section-location">
						<FontAwesomeIcon icon={faLocationDot} className="body--location-icon" />
						<p className="body--location">{props.location.toUpperCase()}</p>
						<a href={props.googleMapsUrl} className="body--map" target="_blank">View on Google Maps</a>
					</section>
					<section className="section-title">
						<p className="body--title">{props.title}</p>
						<p className="body--dates">{props.startDate} - {props.endDate}</p>
					</section>
					<section className="section-body">
						<p className="body--description">{props.description}</p>
					</section>
				</div>
			</div>
			<hr />
		</div>
	)
}