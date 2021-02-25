import React, { useState, useEffect } from "react";
import cx from 'clsx';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import Head from "next/head";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    FormControl,
    FormGroup,
    Typography,
    TextField,
    Input,
    Grid,
    FormLabel,
    Link,
} from "@material-ui/core";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: 0,
        borderTop: "2px solid #f4a261"

    },
    content: {
        padding: 24,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalStyle: {
        backgroundColor: theme.palette.background.paper,
        border: '3px solid #2A9D8F',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 5, 5),
        outline: "none"
    },
    link1: {
        color: '#32CD32',
        textDecoration: 'none',

    },
    link2: {
        color: '#FF4500',
        textDecoration: 'none',
    },
    link3: {
        color: '#9400D3',
        textDecoration: 'none',
    },
}));





const metaDataFooter = () => {
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();

    return (
        <div>
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
                <CardContent className={cardStyles.content}>
                    <p>We use metada from uploaded media in order to catalog it and assist in the machine learning process. Metadata is "data that provides information about other data". In other words, it is "data about data". Many distinct types of metadata exist, including descriptive metadata, structural metadata, administrative metadata, reference metadata and statistical metadata.</p>
                    <p>If you would like to know more about what information is included in each type of metadata, please <Link href="/metadata">Click Here</Link></p>
                </CardContent>
            </Card>
        </div >
    );
};
export default metaDataFooter;