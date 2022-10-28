import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import HomeList from "../features/home/HomeList";
import Layout from "../components/Layout";

const Main = () => {
  return (
    <Layout>
      <Header></Header>
      <HomeList></HomeList>
      <Banner></Banner>
    </Layout>
  );
};

export default Main;
