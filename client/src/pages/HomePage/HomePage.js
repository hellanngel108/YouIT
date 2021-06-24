import React, { useState, useEffect } from "react";
import { Layout, Button, Image, Typography } from "antd";
import styles from "./styles.js";
import RotatingText from "react-rotating-text";

import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import HorizontalScroll from "react-scroll-horizontal";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import * as apiHashtag from "../../api/hashtag";

const { Title, Text } = Typography;

const BigTag = ({ title }) => {
  return (
    <Text className="boldhover" style={{ fontSize: 40, marginRight: 32 }}>
      {title}
    </Text>
  );
};

const pagePadding = 148;
function HomePage() {
  const [user] = useLocalStorage("user");
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    apiHashtag
      .fetchHashtagsTop(8)
      .then((res) => setHashtags(res.data))
      .catch((error) => {
        alert("Cannot get hashtags of system");
        console.log("Error when getting top hashtags", error);
      });
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const github = urlParams.get("github");
    if (github === "true") {
      const token = urlParams.get("token");
      const name = urlParams.get("name");
      const _id = urlParams.get("id");
      localStorage.setItem(
        "user",
        JSON.stringify({
          token,
          result: {
            name,
            _id,
          },
        })
      );
    }
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <div
          className="main"
          style={{ marginTop: 64, padding: 24, alignItems: "center" }}
        >
          <div className="row" style={{ marginBottom: 100 }}>
            <div
              className="col-lg-6 align-items-center justify-content-center"
              style={{ zIndex: 1 }}
            >
              <Text
                style={{
                  fontSize: 60,
                  fontWeight: "bolder",
                  marginBottom: 0,
                  padding: 0,
                }}
              >
                YouIT, share our
              </Text>
              <br />
              {/* <Text style={{ fontSize: 60, fontWeight: "bolder" }}>
                programming skills
              </Text> */}
              <RotatingText
                style={{ fontWeight: 500, fontSize: "2.5rem" }}
                deletingInterval={16}
                items={["programming skills", "tiny bugs", "code experience"]}
              />
              <br />
              <div className="mt-4" />
              <Text style={{ fontSize: 24 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </Text>
              <br />
              <div className="row ml-1 mt-5 mb-5">
                <Button
                  className="green-button mr-4"
                  size="large"
                  style={{ fontFamily: "Consolas", fontSize: 18 }}
                  onClick="/group/60d08c234088f200159fc6db"
                >
                  Interview preparation
                </Button>
                <Button
                  className="green-button"
                  size="large"
                  style={{ fontFamily: "Consolas", fontSize: 18 }}
                  onClick="/group/60d0c3b380bc9b4f44217c30"
                >
                  Hello World
                </Button>
              </div>
            </div>
            {/* <div
              className="col-lg-6"
              style={{
                alignItems: "stretch",
                justifyContent: "stretch",
              }}
            >
              <div style={{ flex: 1, height: 480 }}> */}
            <img
              style={{ position: "absolute", right: 100, opacity: 0.4 }}
              alt="bg-home"
              src="https://lh4.googleusercontent.com/IO_m6yHbVGCB7nqSYiSzwFaThaC26FaAngtHwVrvgLctAgBfL7dMP3EiVKLsHvhn1Y8eAtgQWxWyhWgYTY6U=w1366-h625-rw"
            />
            {/* </div>
            </div> */}
          </div>
          <div
            style={{
              marginBottom: 100,
            }}
          >
            <div data-aos="zoom-in">
              <div className="pink" style={{ height: 350 }} />
            </div>
            <div style={{ height: 24 }} />

            <div data-aos="fade-up" style={{ textAlign: "center" }}>
              <Text strong style={{ fontSize: 40 }}>
                Something 1
              </Text>
              <br />
              <div style={{ height: 16 }} />
              <Text style={{ fontSize: 24 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Text>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="row"
            style={{
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <div className="col-lg-6 mb-4" style={{ textAlign: "left" }}>
              <Text strong style={{ fontSize: 40 }}>
                Something 2
              </Text>
              <br />
              <div style={{ height: 16 }} />

              <Text style={{ fontSize: 24 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </Text>
            </div>
            <div
              data-aos="flip-left"
              className="col-lg-6"
              style={{ textAlign: "left" }}
            >
              <div className="pink" style={{ height: 400 }} />
            </div>
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <div data-aos="flip-right" className="col-lg-6 mb-4">
              <div className="pink" style={{ height: 400 }} />
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6"
              style={{ textAlign: "left" }}
            >
              <Text strong style={{ fontSize: 40 }}>
                Something 3
              </Text>
              <br />
              <div style={{ height: 16 }} />

              <Text style={{ fontSize: 24 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </Text>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              height: 68,
              marginBottom: 50,
            }}
          >
            <HorizontalScroll>
              {hashtags.map((item) => (
                <BigTag key={item._id} title={item.name} />
              ))}
            </HorizontalScroll>
          </div>

          <div
            style={{
              // height: 68,
              textAlign: "center",
            }}
          >
            <div
              data-aos="zoom-in-up"
              style={{
                height: 400,
                marginBottom: 32,
                backgroundColor: "white",
                // flex: 1,
              }}
            />
            <Title className="boldhover">Explore this tag</Title>
            <div style={{ height: 200 }} />
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default HomePage;
