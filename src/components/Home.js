import React, { useEffect } from "react";
import { Heading, Button } from "rebass";
import { Router, Link } from "@reach/router";
import HeadingBar from "../views/HeadingBar";
import "./main.css";
function Home() {
  return (
    <div style={{ height: "730px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "840px",
          alignContent: "center",
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
            fontSize: "19px",
            height: "50px",
            boxShadow: "inset 0 0 8px",
          }}
          mr={2}
        >
          <Link className="main-style" to="/Projects/">
            <HeadingBar menuname="PROJECTS" marginTopProp="0px" />
          </Link>
        </Button>
        <Button
          sx={{
            marginTop: "10px",
            color: "white",
            marginLeft: "200px",
            width: "160px",
            marginBottom: "1em",
            fontSize: "19px",
            height: "50px",
            boxShadow: "inset 0 0 8px",
          }}
          variant="outline"
        >
          <Link className="main-style" to="/experiencedetails/">
            <HeadingBar menuname="EXPERIENCE" marginTopProp="0px" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
