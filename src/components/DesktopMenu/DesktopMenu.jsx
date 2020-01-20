import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container'
// import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    menuItens: {
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        top: 0,        
        background: '#1d1f2b',
        color: '#fff',
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    menuItensRight: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        float: 'right'
    },
    menuButton: {
        fontSize: '18px',
        padding: '5px 8px',
        textDecoration: 'none',
        color: '#13e3cd',
        '&:hover': {
            borderRadius: '6px',
            backgroundColor: '#13e3cd',
            color: '#fff'
        }
    }
})

const DesktopMenu = () => {

    const classes = useStyles()
    
    return (
        <div className={classes.menuItens}>
            <div>
                
            </div>
            <div className={classes.menuItensRight}>               
                <div>
                    <a className={classes.menuButton} href="/">
                        Book Flights
                    </a>
                </div>
                <div>
                    <a className={classes.menuButton} href="/">
                        Map View
                    </a>
                </div>
                <div>
                    <a className={classes.menuButton} href="/">
                        Flight Status
                    </a>
                </div>
                <div>
                    <a className={classes.menuButton} href="/">
                        My Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesktopMenu