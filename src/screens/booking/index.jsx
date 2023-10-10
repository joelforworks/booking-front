import React, { useState,useEffect } from 'react';
import { useLoaderData, } from "react-router-dom";
// Style
import '../../styles/screens/booking.css';
// components
import Card from '../../components/booking/card';
import Edit from '../../components/booking/edit';
import { deleteBooking,updateBooking } from '../../services/booking.service';
import { useNavigate } from "react-router-dom";

const Screen = () => {
	const navigate = useNavigate();
	const [error,setError]= useState(false);
	const [isOpen,setIsOpen]=useState(false);
	const [message,setMessage]= useState(false);

	const { data:booking } = useLoaderData();

	const handleEdit = () => {
		setIsOpen(!isOpen)
	}

	const handleDelete = () => {
		deleteBooking(booking.id).then(
			(response)=>{
				navigate('/');
			},
			(error)=>{
				setError(true);
			}
		)
	}

	return (
		<div className='booking'>
			<Card
				booking={booking}
			/>
			<div className='buttons'>
				<span onClick={handleEdit}>EDIT</span>
				<span onClick={handleDelete}>DELETE</span>
			</div>
			{error && 
					<div>
						Somethig wrong!!
					</div>
			}
			<Edit
				open={[isOpen,setIsOpen]}
				booking={booking}
			/>
		</div>
	)
}

export default Screen;
