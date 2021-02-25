import React from 'react'
import Head from 'next/head'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import Container from '@material-ui/core/Container'
import SearchForm from '../components/SearchForm';
import MetaDataFooter from '../components/MetaDataFooter'

const Search = () => {
    return (
        <>
            <Head>
                <title>DroneZones: Uploads</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AmplifyAuthenticator>
                <Container style={{ width: "60%", alignItems: "center", marginTop: "100px", marginLeft: "18vw" }}>
                    <SearchForm />
                </Container>
                <Container style={{ width: "60%", alignItems: "center", marginTop: "30px", marginLeft: "18vw" }}>
                    <MetaDataFooter />
                </Container>

            </AmplifyAuthenticator>
        </>
    )
}

export default Search