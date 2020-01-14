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
		maxWidth: 345
	},
	media: {
		height: '100%',
		minHeight: 140,
		color: '#fff'
	}
})

const TravelCard = ({ cardData }) => {

	const classes = useStyles()
	
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={cardData.thumb}
					title="bookings of user">
					{/* <Typography gutterBottom variant="h5" component="h2">
						{cardData.destination}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{moment(cardData.outboundDate).format('DD MMM')}
					</Typography> */}
					<div>
						<span>
							{cardData.destination}
						</span>
						<span>
							{moment(cardData.outboundDate).format('DD MMM')}
						</span>
					</div>
				</CardMedia>
			</CardActionArea>
		</Card>
    )
}

export default TravelCard