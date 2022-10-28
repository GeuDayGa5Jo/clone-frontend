import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Layout from "../components/Layout";
import HomeList from "../features/home/HomeList";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Header></Header>
      <HomeList></HomeList>
      <Banner></Banner>
    </Layout>
  );
};

export default Home;
