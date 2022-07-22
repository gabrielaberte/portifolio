import React from "react";
import TimeLine from "../timeline";
import { Container } from "./styles";
import { DivAbout, DivInside } from "./styles";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined 
} from '@ant-design/icons';

function About() {
  return (
    <Container>
      <DivAbout>
        <DivInside>
          <div>
            <h1>Hi, there! I'm Gabe.</h1>
            <p>
              I'm a brazilian developer passionate about technology and learning
              new things. Graduated in Environmental Engineering and Post
              Graduated in Geoprocessing,
              I had experience with academic research and was also part of the
              Junior Enterprise of the course. Migrating to the world of
              technology, I am currently working on development with ReactJS and
              studying React Native.
            </p>
          </div>
        </DivInside>
        <DivInside>
          <div>
            <h1>Contacts</h1>
            <p style={{width: 'max-content'}}>
              <MailOutlined style={{marginRight: '10px',display: 'flex', justifyContent: 'center', alignItems: 'center'}} /> gabrielamoroberte@gmail.com
            </p>
            <p>
              <GithubOutlined style={{marginRight: '10px',display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
              <a href="https://github.com/gabrielaberte" style={{textDecoration: "none", color: 'black'}}> GitHub</a>
            </p>
            <p>
              <LinkedinOutlined  style={{marginRight: '10px',display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
              <a href="https://www.linkedin.com/in/gabriela-moro-berté-89655a113/" style={{textDecoration: "none", color: 'black'}}>LinkedIn</a>
            </p>
            
          </div>
        </DivInside>
      </DivAbout>
    </Container>
  );
}

export default About;
