import React from "react";
import { Button, Row, Col, Divider, Form, Typography, Input, Card } from "antd";
import { Avatar, Image, Tag } from "antd";
import styles from "./styles.js";
import { Link, useHistory, useLocation } from "react-router-dom";

const { Title, Text } = Typography;

function GroupJoinedCard({ nameGroup, _id, description, totalMembers }) {
  console.log("aa", totalMembers);
  return (
    <>
      <div style={styles.card}>
        <div className="row ml-2" style={{ justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              minWidth: 500,
            }}
          >
            <Avatar
              size={72}
              src="https://i.pinimg.com/564x/03/d5/62/03d5624fae645eccaa74315f6ed49c03.jpg"
            />

            <div className="col-8" style={{ alignSelf: "center" }}>
              <Link to={`/group/${_id}`}>
                <Text style={styles.textUser}>{nameGroup ?? "Name Group"}</Text>
              </Link>
              <div style={{ marginTop: 0 }}></div>
              <Text>{description ?? "Blackpink in your area"}</Text>
            </div>
            <div
              style={{
                marginLeft: 0,
                justifyContent: "center",
                flex: 1,
                display: "flex",
              }}
            ></div>
          </div>

          <div
            className="mr-3"
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Button
              onClick={() => {}}
              className="mb-2"
              type="primary"
              style={{
                background: "#27AE60",
                borderColor: "#27AE60",
                color: "white",
                fontWeight: 500,
              }}
            >
              Đăng bài
            </Button>
            <div>
              <Text style={styles.text}>
                {(totalMembers ?? 0) +
                  " Member" +
                  (totalMembers > 2 ? "s" : "")}
              </Text>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="ml-4">
            <Tag className="tag">#Talkshow</Tag>
            <Tag className="tag">#KPOP</Tag>
            <Tag className="tag">#Film</Tag>
            <Text style={{ ...styles.text, fontWeight: 600 }}>+ 15 Posts</Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupJoinedCard;
