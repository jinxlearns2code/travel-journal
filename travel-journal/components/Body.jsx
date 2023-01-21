import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Body(props) {
	return (
		<div className="body-container">
			<div className="card">
				<img
					src={`images/${props.imageUrl}`}
					className="card--image"
				/>
				<div className="card--info">
					<section className="section-location">
						<FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
						<p className="card--location">{props.location.toUpperCase()}</p>
						<a href={props.googleMapsUrl} className="card--map" target="_blank">View on Google Maps</a>
					</section>
					<section className="section-title">
						<p className="card--title">{props.title}</p>
						<p className="card--dates">{props.startDate} - {props.endDate}</p>
					</section>
					<section className="section-body">
						<p className="card--description">{props.description}</p>
					</section>
				</div>	
			</div>
			<hr />
		</div>
	)
}