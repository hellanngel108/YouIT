import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import styles from "./styles.js";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";

import FeedSidebar from "../../components/Sidebar/FeedSidebar/FeedSidebar";
import { fetchUserJoinedGroups } from "../../redux/actions/group.js";
import { useDispatch } from "react-redux";
import TestFeed from "../../components/Posts/FeedPosts/TestFeed/TestFeed.js";

const { Content } = Layout;

function FeedPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserJoinedGroups());
  }, []);
  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          <Layout style={styles.mainArea}>
            {/* <div className="feed-container">
              <FeedSidebar className="sidebar" />
              <FeedPosts className="content" id="scrollableDiv" />
            </div> */}
            {/* <FeedPosts /> */}
            <div className="feed-container">
              <FeedSidebar className="sidebar" />
              <div className="content" id="scrollableDiv">
                <TestFeed />
              </div>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default FeedPage;
