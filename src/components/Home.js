import React from "react";
import { Heading, Button, Flex } from "rebass";
import { Link } from "@reach/router";
import HeadingBar from "../views/HeadingBar";
import "./main.css";
function Home() {
  return (
    <div
      className="home-style"
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "1",
        color: "#fff",
        paddingLeft: "110px",
        paddingTop: "130px",
        textShadow: "1px 1px 2px rgba(0,0,0,.6)",
        fontSize: "12px",
      }}
    >
      <Flex
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          marginLeft: "25%",
          width: "75%",
          maxWidth: "840px",
        }}
      >
        <h1
          style={{
            fontSize: "4em",
            fontWeight: "500",
            fontFamily: "cursive",
            marginLeft: "44px",
            color: "white",
            marginTop: "100px",
            textShadow: "1px 1px 2px rgba(0,0,0,.6);",
          }}
        >
          Hi, I'm Likitha,
        </h1>
        <Heading
          as="h3"
          sx={{
            fontSize: "3em",
            fontWeight: "40",
            marginLeft: "44px",
            color: "white",
            fontFamily: "fantasy",
          }}
        >
          A software engineer specialized in both front-end and back-end.
        </Heading>
        <Button
          variant="outline"
          sx={{
            marginTop: "50px",
            color: "white",
            marginLeft: "200px",
            width: "160px",
            marginBottom: "1em",
            height: "50px",
            border: "1px solid white",
          }}
          mr={2}
        >
          <Link className="main-style" to="/Projects/">
            PROJECTS
          </Link>
        </Button>
        <Button
          sx={{
            marginTop: "10px",
            color: "white",
            marginLeft: "200px",
            width: "160px",
            marginBottom: "1em",
            height: "50px",
            border: "1px solid white",
          }}
          variant="outline"
        >
          <Link className="main-style" to="/experiencedetails/">
            EXPERIENCE
          </Link>
        </Button>
      </Flex>
    </div>
  );
}

export default Home;
