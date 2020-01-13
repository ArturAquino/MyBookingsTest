import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { bookings } from '../../actions'

import { TravelCard } from '../../components'

const calcScreenSize = () => {
	return window.screen.width <= 1024 ? 'column' : 'row'
}

const useStyles = makeStyles({
	cardSpaces: {
		padding: '10px 0 0',
		minWidth: '300px'
	},
	container: {
		padding: '10px 0',
		display: 'flex',
		flexDirection: calcScreenSize(),
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

const MyBookings = () => {

	const classes = useStyles()

	const [myListBookings, setMyListBookings] = useState([])

	const {
		getBookings
	} = bookings

	useEffect(() => {
		calcScreenSize()
		getBookings().then(response => {
			setMyListBookings(response)
		})
	}, [getBookings])

	const renderListOfBookings = () => {

		return myListBookings.map((item, key) => {
			return (
				<div key={key} className={classes.cardSpaces}>
					<TravelCard cardData={item}/>
				</div>	
			)
		})
	}

	return (
		<Container className={classes.container}>
			{renderListOfBookings()}
		</Container>
	)
}

export default MyBookings