import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Auth, Hub } from 'aws-amplify';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const drawerWidth = "16vw";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: '#F4A261',
            elevation: "50"

        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
                backgroundColor: '#F4A261',
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                background: 'transparent',
                boxShadow: 'none'
            },
        },
        profileButton: {
            "&:hover": {
                backgroundColor: "#E76F51",
                borderRadius: 15
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        toolbarHeader: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                textAlign: "center",
                backgroundColor: fade('#F4A261', 0.2),
            },
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundImage: 'url(backgrounds/sidebar.jpeg)',
            backgroundSize: "auto 100%",
            boxShadow: "inset 0 0 0 2000px rgba(255, 255, 255, 0.75), 0px 0px 20px 1px rgba(0, 0, 0, 0.5)",
            borderRight: "2px solid #2a9d8f"
        },
        links: {
            fontSize: '1.5em',
            fontStyle: 'bold',
        },
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [header, setHeader] = useState(null);
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [user, setUser] = useState(null);
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                setUser(user.username);
            })
            .catch(() => setUser(null))
    }, [])
    const drawer = (
        <Box>
            <Box
                boxShadow={2}
                className={classes.toolbarHeader}>
                <Link href="/"><img src="mainlogo.png" alt="logo" style={{ width: "10.75vw", padding: ".75vw" }} onClick={() => setHeader('')} /></Link>
            </Box>

            <List className={classes.links}>
                <Link href="/"><ListItem button key="Home" onClick={() => setHeader(null)}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                        Home
                    </ListItem></Link>
                <Link href="/upload"><ListItem button key="Upload" onClick={() => setHeader('Upload')}>
                    <ListItemIcon><CloudUploadIcon /></ListItemIcon>
                        Upload
                    </ListItem></Link>
                <Link href="/search"><ListItem button key="Search" onClick={() => setHeader('Search')}>
                    <ListItemIcon><ImageSearchIcon /></ListItemIcon>
                        Search
                    </ListItem></Link>
                <Link href="/profile"><ListItem button key="Profile" onClick={() => setHeader('Profile')}>
                    <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                        Profile
                    </ListItem></Link>
                <Link href="/profile"><ListItem button onClick={() => { Auth.signOut(); setUser(null) }} key="SignOut">
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        Sign Out
                    </ListItem></Link>
            </List >
            <BottomNavigation setHeader={setHeader} header={header} />
        </Box >
    );


    Hub.listen(/signedin/, (data) => {
        setUser(data.payload.data.username)
    })

    return (
        < Box
            boxShadow={3}
            className={classes.root} >
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" style={{ color: 'black', width: '5vw', marginLeft: drawerWidth, fontFamily: 'Roboto', fontWeight: 100 }}>{header || <p></p>}</Typography>
                    <Box style={{ width: '50%' }}></Box>
                    <Typography variant="h6" style={{ color: "black", marginRight: '.5vw', fontWeight: 400 }}>{user || 'Please Log In'}</Typography>
                    <Link href="/profile">
                        <BottomNavigationAction label="TopSearch" icon={<PersonIcon style={{ color: "black", marginLeft: '-9vw', marginTop: '.3vw' }} className={classes.profileButton} />} />
                    </Link>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </Box >


    )
}

