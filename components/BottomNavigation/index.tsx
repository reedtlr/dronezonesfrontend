import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        background: 'transparent'
    },
});
export default function SimpleBottomNavigation({ setHeader, header }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <Container className={classes.root}>
            <BottomNavigation
                showLabels
                value={value}
                style={{ background: 'transparent' }}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <Link href="/about" >
                    <BottomNavigationAction label="About" icon={<InfoIcon />} onClick={() => setHeader('About')} />
                </Link>
                <Link href="/metadata">
                    <BottomNavigationAction label="Contact" icon={<SpeakerNotesIcon />} onClick={() => setHeader("Metadata")} />
                </Link>
                <Link href="/search">
                    <BottomNavigationAction label="Search" icon={<WhereToVoteIcon />} onClick={() => setHeader('Search')} />
                </Link>
            </BottomNavigation>
        </Container>
    );
}















