import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import HomePage from "../screen/home";
import store from "../store/store";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaiglo Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Provider store={store}>
        <HomePage />
          {/* <Router>
        <Routes>
          
          <Routes>
            </Router> */}
        </Provider>
      </main>
    </>
  );
}
