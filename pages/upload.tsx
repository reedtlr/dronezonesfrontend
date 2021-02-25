import React from "react";
import Head from "next/head";
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'
import Container from "@material-ui/core/Container";
import Uploader from "../components/Uploader";

const Upload = () => {
    return (
        <>
            <Head>
                <title>DroneZones: Uploads</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AmplifyAuthenticator>
                <Container style={{ width: "60%", alignItems: "center", marginTop: "100px", marginLeft: "18vw" }}>
                    <Uploader />
                </Container>
            </AmplifyAuthenticator >
        </>
    );
};

export default Upload;