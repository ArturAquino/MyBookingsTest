import React, { useState, useEffect } from 'react'

import { TravelsBlock } from '../../components'

import { bookings } from '../../actions'

const MyBookings = () => {

	const [myListBookings, setMyListBookings] = useState([])

	const {
		getBookings
	} = bookings

	useEffect(() => {
		getBookings().then(response => {
			setMyListBookings(response)
		})
	}, [getBookings])

	return (
		<>
			<TravelsBlock title="Upcoming" data={myListBookings}/>
			<TravelsBlock title="Past" data={myListBookings}/>
		</>
	)
}

export default MyBookings