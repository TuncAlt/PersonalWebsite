import { Bungee } from "next/font/google";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #ff00ff, #00ffff);
  height: 100vh;
`;

const Title = styled.h1`
  font-family: Bungee;
  font-size: 6vw;
  font-weight: normal;
  color: #ffffff;
  text-shadow: 2px 2px #00ffff, 4px 4px #ff00ff;
  position: fixed;
  top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Description = styled.div`
  font-family: VT323;
  background-color: background-image: linear-gradient(to bottom right, #ff00ff, #00ffff);;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 2px 2px #ffffff, 5px 5px #ff00ff;
  text-align: center;
  max-width: 80%;
`;

const About = styled.p`
  position: relative;
  font-size: 2.5vw;
  line-height: 1.5;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
`;

const Link = styled.a`
  font-family: VT323;
  font-size: 3vw;
  color: #ff00ff;
  text-shadow: 2px 2px #00ffff, 4px 4px #ff00ff;
  margin: 0 1vw;
`;

const FooterContainer = styled.footer`
  font-family: Bungee;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  color: #fff;
  height: 5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Copyright = styled.p`
  font-size: 2vw;
  margin: 0;
`;

export default function PortfolioPage() {
  return (
    <Container>
      <Title>Welcome to my Portfolio</Title>
      <Content>
        <Description>
          <About>Hello and welcome to my portfolio!</About>
          <About>
            As a junior web developer, I am passionate about creating beautiful
            and functional websites using the latest technologies. With skills
            in HTML, CSS, JavaScript, React, and Next.js, I am committed to
            learning and growing as a developer every day.
          </About>
          <About>
            I recently completed a three-month bootcamp for web development,
            where I gained valuable experience in building real-world
            applications and collaborating with a team of developers. Please
            take a moment to check out my projects and feel free to connect with
            me on LinkedIn or GitHub.
          </About>

          <Links>
            <Link href="#">Projects</Link>
            <Link href="https://www.linkedin.com/in/tuncer-altun-566b1a1a3/">
              LinkedIn
            </Link>
            <Link href="https://github.com/TuncAlt">GitHub</Link>
          </Links>
        </Description>
        <FooterContainer>
          <Copyright>&copy; Tuncer Altun 2023</Copyright>
        </FooterContainer>
      </Content>
    </Container>
  );
}
