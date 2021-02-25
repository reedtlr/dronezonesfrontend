import Head from "next/head";
import Container from "@material-ui/core/Container";
import AboutCard from "../components/AboutCard";

export default function Home() {
    return (
        <>
            <Head>
                <title>DroneZones: About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container style={{ width: "60%", alignItems: "center", marginTop: "100px", marginLeft: "18vw" }}>
                <AboutCard />
            </Container>
        </>
    );
}