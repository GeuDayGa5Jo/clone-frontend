import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ContentList from "../features/Profile/ContentList";

const Profile = () => {
  return (
    <Layout>
      <Header></Header>
      <ContentList></ContentList>
      <Banner></Banner>
    </Layout>
  );
};

export default Profile;
