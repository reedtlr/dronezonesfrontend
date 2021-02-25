import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Carousel from '../Carousel'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: 0,
        borderBottom: "2px solid #f4a261"
    },
    main: {
        textAlign: "right"
    },
    title: {
        fontSize: 25,
        fontWeight: 500,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 100
    },
});

const HomeCard = () => {
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <CardContent>
                <Grid className={cardStyles.main}>
                    <h1 className={cardStyles.title}>Welcome to DroneZones</h1>
                    <h3 className={cardStyles.subtitle}>We're your one stop location for sorting videos using metadata</h3>
                </Grid>
            </CardContent>
            <Carousel />
        </Card>
    );
}

export default HomeCard;