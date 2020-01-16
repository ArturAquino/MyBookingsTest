import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

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
		<Container style={{ padding: '0 15px' }}>
			<Typography variant="h1" style={{ padding: '0 0 45px' }} >Your Flights.</Typography>
			<TravelsBlock title="Upcoming" data={myListBookings}/>
			<TravelsBlock title="Past" data={myListBookings}/>
		</Container>
	)
}

export default MyBookings