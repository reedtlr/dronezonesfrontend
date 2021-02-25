import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Container from '@material-ui/core/Container'
import ProfileCards from '../components/ProfileCards'

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
                <title>DroneZones: Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AmplifyAuthenticator>
                <Container style={{ width: "80%", alignItems: "center", marginTop: "100px", marginLeft: "18vw" }}>
                    <ProfileCards />
                </Container>
            </AmplifyAuthenticator>
        </>
    )
}

export default withAuthenticator(Profile);