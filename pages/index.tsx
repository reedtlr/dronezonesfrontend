import Head from "next/head";
import Container from "@material-ui/core/Container";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>DroneZones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container style={{ width: "60%", alignItems: "center", marginTop: "100px", marginLeft: "18vw" }}>
        <HomeCard />
      </Container>
    </>
  );
}
