import React from 'react';
import '../styles/globals.css'
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import Layout from '../components/Layout';
import AppBar from '../components/AppBar';

Amplify.configure({
  ...config,
  ssr: true
});


export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <AppBar />
      <Component {...pageProps} />
    </Layout >
  )
}