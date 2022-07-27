import { Container } from "./styles";
import { Card, Avatar, Grid } from "antd";
import React, { useState } from "react";
import ip from "../../../assets/ip-tracker.png";
import url from "../../../assets/url-shorter.png";
import searchCountries from "../../../assets/search-countries.png";

const { Meta } = Card;

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

  var largura: number | boolean = window.screen.width;
  if (largura < 400) {
    largura = false
  }

export default function Cards() {
  return (
    <div>
      <Container>
        <Card
          hoverable
          style={{
            backgroundColor: "#ffffff",
            color: "white",
            width: largura ? '300px' : 'fit-content',
            marginRight: 20,
            marginBottom: 20
          }}
          cover={<img alt="example" src={searchCountries} />}
        >
          <Meta
            title={
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://contry-gabrielaberte.vercel.app"
              >
                Search for Countries
              </a>
            }
            description={
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://contry-gabrielaberte.vercel.app"
              >
                Search by Region or by name.
              </a>
            }
          />
        </Card>
        <Card
          hoverable
          style={{
            backgroundColor: "#ffffff",
            color: "white",
            width: largura ? '300px' : 'fit-content',
            marginRight: 20,
            marginBottom: 20
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
            width: largura ? '300px' : 'fit-content',
            marginRight: 20,
            marginBottom: 20
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
