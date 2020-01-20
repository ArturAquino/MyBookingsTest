import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('en')

const useStyles = makeStyles({
	card: {
		width: '100%',
		maxWidth: 345
	},
	media: {
		height: '100%',
		minHeight: 140,
		color: '#fff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'last baseline'
	},
	text: {
		padding: '0 10px'
	}
})

const TravelCard = ({ cardData }) => {

	const classes = useStyles()
	
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia className={classes.media}
					image={cardData.thumb} title="bookings of user">
					<Typography variant="h5" component="p" className={classes.text}>
						{cardData.destination}
					</Typography>
					<Typography variant="overline" component="p" className={classes.text}>
						{moment(cardData.outboundDate).format('DD MMM')} - {moment(cardData.inboundDate).format('DD MMM')}
					</Typography>
				</CardMedia>
			</CardActionArea>
		</Card>
    )
}

export default TravelCard