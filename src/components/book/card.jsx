import React, { useState } from 'react';
// Style
import '../../styles/components/card.css';
import { Link } from "react-router-dom";

const Component = (props) => {
	const booking = props.booking;
	return (
		<Link className='card'
			to={`/booking/${booking.id}`}
		>
			ID : {booking.id}
		</Link>
	)
}

export default Component;

