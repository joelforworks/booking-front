import React, { useState,useEffect } from 'react';

const Component = (props) => {
	const {booking} = props
	return (
		<div className='container'>
			<p>
				ID: {booking.id}
			</p>
			<p>
				STATUS: {booking?.status}
			</p>
			<p>
				DESCRIPTION: {booking?.description}
			</p>
			<p>
				Created: {new Date(booking?.created_at).toLocaleDateString("en-GB")}
			</p>
			<p>
				Updated: {new Date(booking?.updated_at).toLocaleDateString("en-GB")}
			</p>
		</div>
	)
}

export default Component;
