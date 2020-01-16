import React from 'react'
import { TravelCard } from '../../components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    cardSpaces: {
        padding: '10px 0 0',
        minWidth: '290px'
    },
    containerCards: {
        padding: '0 0 45px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

const TravelsBlock = ({ title, data }) => {

    const classes = useStyles()

    const renderListOfBookings = () => {

        return data.map((item, key) => {
            return (
                <div key={key} className={classes.cardSpaces}>
                    <TravelCard cardData={item} />
                </div>
            )
        })
    }

    return (
        <div>
            <Typography variant="h6">{title}</Typography>
            <div className={classes.containerCards}>
                {renderListOfBookings()}
            </div>
        </div>
    )

}

export default TravelsBlock
