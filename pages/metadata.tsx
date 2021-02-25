import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Container from '@material-ui/core/Container'
import MetadataCard from '../components/MetadataCard'

function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log("user", user);
                setUser(user.username);
            })
            .catch(() => setUser(null))
    }, [])

    return (
        <>
            <Head>
                <title>DroneZones: MetaData</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AmplifyAuthenticator>
                <Container style={{ width: "60%", alignItems: "center", marginTop: "100px", marginLeft: "18vw" }}>
                    <MetadataCard />
                </Container>
            </AmplifyAuthenticator>
        </>
    )
}

export default withAuthenticator(Profile);