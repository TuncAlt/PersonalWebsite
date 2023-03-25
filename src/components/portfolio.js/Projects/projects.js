import { useRouter } from "next/router";
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
  background-color: #ffffff;
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
  &:hover {
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(-3deg);
    }
    50% {
      transform: translateX(0) rotate(3deg);
    }
    75% {
      transform: translateX(5px) rotate(-3deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }
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
const Backbutton = styled.button`
  font-family: Bungee;
  font-size: 3vw;
  font-weight: normal;
  color: #ffffff;
  text-shadow: 2px 2px #00ffff, 4px 4px #ff00ff;
  position: fixed;
  bottom: 5rem;
  left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(-3deg);
    }
    50% {
      transform: translateX(0) rotate(3deg);
    }
    75% {
      transform: translateX(5px) rotate(-3deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }
`;

export default function Projects() {
  const router = useRouter();
  return (
    <Container>
      <Title>My Projects</Title>
      <Content>
        <Backbutton onClick={() => router.push("/")}> Back</Backbutton>

        <Description>
          <About>Here are some of the projects I have worked on:</About>
          <About>
            <Link href="https://capstone-project-six-eosin.vercel.app/">
              Temperature Logger
            </Link>
          </About>
        </Description>
        <FooterContainer>
          <Copyright>&copy; Tuncer Altun 2023</Copyright>
        </FooterContainer>
      </Content>
    </Container>
  );
}
