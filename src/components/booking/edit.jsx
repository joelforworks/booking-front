import React, { useState } from 'react';
// services 
import { updateBooking } from '../../services/booking.service';
// Style
import '../../styles/components/create.css';
import { useNavigate } from "react-router-dom";

const Component = (props) => {
	const navigate = useNavigate();
	const [isOpen,setIsOpen] = props.open
	const booking = props.booking;
	const [status,setStatus] = useState('');
	const [description,setDescription] = useState('');
	const [error,setError] = useState(false)
	const [message,setMessage] = useState(false)


	const handleSend  = () => {
		updateBooking(booking.id,status,description).then(
			(response)=>{
				clear();
				setMessage(true);
				navigate(`/booking/${booking.id}`)
			},
			(error)=>{
				setMessage(false);
				setError(true)
			}
		)
	}

	const clear = () => {
		setStatus('');
		setDescription('');
		setError('');
		setMessage(false);
		setError(false)
	}

	const handleClose = () => {
		clear();
		setIsOpen(!isOpen);
	}

	return (
		<div
			className='create'
			style={{
				display:isOpen?'':'none'
			}}
		>
			<span className='close'
				onClick={handleClose}
			>
				X
			</span>
			<label>
				status : 
				<input
					onChange={(e)=>setStatus(e.target.value)}
					value={status}
				/>
			</label>
			<label>
				description: 
				<input 
					onChange={(e)=>setDescription(e.target.value)} 
					value={description}
				/>
			</label>
			<button onClick={handleSend}>
				send
			</button>
			{error &&
			<div>
				Something wrong!
			</div>
			}
			{message &&
				<div>
					Booking updated!
				</div>
			}

		</div>
	)
}

export default Component;
