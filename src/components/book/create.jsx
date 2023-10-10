import React, { useState } from 'react';
// services 
import { storeBooking } from '../../services/booking.service';
// Style
import '../../styles/components/create.css';

const Component = (props) => {
	const [isOpen,setIsOpen] = props.open
	const [status,setStatus] = useState('');
	const [description,setDescription] = useState('');
	const [error,setError] = useState(false)
	const [message,setMessage] = useState(false)


	const handleSend  = () => {
		console.log(status,description);
		storeBooking(status,description).then(
			(response)=>{
				clear();
				setMessage(true);
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
					Booking created!
				</div>
			}

		</div>
	)
}

export default Component;
