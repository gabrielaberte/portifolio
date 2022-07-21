import { Container } from "./styles";
import { Card, Avatar, Grid } from "antd";
import React, { useState } from "react";
import ip from "../../../assets/ip-tracker.png";
import url from "../../../assets/url-shorter.png";

const { Meta } = Card;

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

export default function Cards() {
  return (
    <div>
      <Container>
        <Card
          hoverable
          style={{
            backgroundColor: "#ffffff",
            color: "white",
            width: 300,
            marginRight: 20,
          }}
          cover={<img alt="example" src={ip} />}
        >
          <Meta
            title={
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://ip-address-traker-gabrielaberte.vercel.app"
              >
                IP Tracker
              </a>
            }
            description={
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://ip-address-traker-gabrielaberte.vercel.app"
              >
                {" "}
                Click the black button to discover your IP or enter an IP to
                track down the location on the map.
              </a>
            }
          />
        </Card>
        <Card
          hoverable
          style={{
            backgroundColor: "#ffffff",
            color: "white",
            width: 300,
            marginRight: 20,
          }}
          cover={<img alt="example" src={url} />}
        >
          <Meta
            title={
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://frontend-mentor-url-short.vercel.app"
              >
                URL Shorter
              </a>
            }
            description={
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://frontend-mentor-url-short.vercel.app"
              >
                Enter your link and make it shorter.
              </a>
            }
          />
        </Card>
      </Container>
    </div>
  );
}
