import React from "react";
import styles from '../../styles/Search.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    content: {
        padding: 24,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        background: 'linear-gradient(to bottom, #F4A261, #e76f51)',
        color: theme.palette.common.white,
        borderRadius: 0,
        opacity: 0.9
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const SearchData = ({ videos, handleChange, }) => {
    const cardStyles = useStyles();
    const classes = useStyles();

    return (

        <CardContent className={cardStyles.content}>
            <div className={styles.containerfluid}>
                <form className={styles.searchform} onChange={handleChange} >
                    <div className="formgroup">
                        <input
                            name="search"
                            list="search"
                            type="text"
                            className={styles.formcontrol}
                            placeholder="Search Drone Videos"
                            id="search"
                        />
                    </div>
                </form>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Media Name</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Region</StyledTableCell>
                            <StyledTableCell align="right">Video URL</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videos.map((video) => (
                            <StyledTableRow key={video._id}>
                                <StyledTableCell component="th" scope="row">
                                    {video.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{video.description}</StyledTableCell>
                                <StyledTableCell align="right">{video.date}</StyledTableCell>
                                <StyledTableCell align="right">{video.region}</StyledTableCell>
                                <StyledTableCell align="right"><a href={video.url} target="_blank">{video.url}</a></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>

    );
};

export default SearchData;