import React from 'react';
import {Card, CardContent , Topography ,Grid, Typography} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards =( {data: {confirmed, recovered, deaths, lastUpdate}}) =>{
    if(!confirmed)
    {
        return 'Loading....';
    }
    
    return (
        <div className={styles.container}>
            < Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of total cases of COVID-19</Typography>
                    </CardContent>
                 </Grid>


                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                 </Grid>


                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                 </Grid>
            

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.cardActive)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active Cases </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value-recovered.value-deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of active from COVID-19</Typography>
                    </CardContent>
                 </Grid>

                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cardRecovery)}>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovery Rate % </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={(recovered.value/confirmed.value)*100 } duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Recovery Rate of  COVID-19</Typography>
                    </CardContent>
                 </Grid>
                
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cardFatality)}>
                 <CardContent>
                        <Typography color="textSecondary" gutterBottom>Fatality Rate % </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={(deaths.value/confirmed.value)*100 } duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Fatality Rate of  COVID-19</Typography>
                    </CardContent>
                 </Grid>

                 

            </Grid>

        </div>
    )
}
export default Cards;