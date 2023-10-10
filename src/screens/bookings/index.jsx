import React, { useState,useEffect } from 'react';
// Components
import Title from '../../components/book/title';
import Create from '../../components/book/create';
import Card from '../../components/book/card';
// Style
import '../../styles/screens/book.css';
// services 
import { getBookings } from '../../services/booking.service';


const Screen = () => {
	const [isOpen,setIsOpen]=useState(false);
	const [data,setData]= useState();
	const [error,setError] = useState(false)

	useEffect(()=>{
		getBookings().then(
			(response)=>{
				setData(response.data?.data);
			},
			(error)=>{
				setError(!error);
			}
		)
	},[])
	return (
		<div  className='book'>
			<Title
				title={'BOOKING'}
			/>


			<div className='buttons'>
				<span onClick={()=>setIsOpen(!isOpen)} >
					CREATE
				</span>
				<span onClick={()=>window.location.reload()}>
					REFRESH
				</span>
			</div>
			<div className='bookings'>
				{data?.map((booking)=>(
					<Card 
						key={booking.id}
						booking={booking}
					/>
				))}
			</div>

			<Create
				open={[isOpen,setIsOpen]}
			/>
			{error &&
			<div>
				Something wrong!
			</div>
			}

		</div>
	)
}

export default Screen;
