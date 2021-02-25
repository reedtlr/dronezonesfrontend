import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import { makeStyles } from '@material-ui/core/styles';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import SearchData from '../SearchData';
import MetaData from '../../data/index.json';
import PopulateVideos from '../../pages/api/API';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderRadius: 0,
        borderBottom: "2px solid #f4a261"

    },

}));



const SearchForm = () => {
    const [search, setSearch] = useState([])
    const [videos, setVideos] = useState([])
    const [searchedVideos, setSearchedVideos] = useState([]);
    const cardStyles = useStyles();
    const shadowStyles = useLightTopShadowStyles();
    const classes = useStyles();


    useEffect(() => {
        PopulateVideos().then((res) => {
            if (res.data.length === 0) {
                throw new Error("No results found.");
            }
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            setVideos(res.data);
            setSearchedVideos(res.data)

        }).catch((error) => console.log(error));
    }, [])

    const handleChange = (e) => {
        const searchQuery = e.target.value;
        const searchQueryList = videos.filter((video) => {
            let values = Object.values(video).join("").toLowerCase();

            return values.indexOf(searchQuery.toLowerCase()) !== -1;
        });
        setSearchedVideos(searchQueryList);
    };

    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={'headers/search.png'}
                extra={'Search'} />
            <SearchData videos={searchedVideos} handleChange={handleChange} />
        </Card >
    );
}

export default SearchForm;