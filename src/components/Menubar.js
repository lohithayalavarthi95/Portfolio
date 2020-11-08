import React from "react";
import ImageComponent from "../views/ImageComponent";
import personalimage from "../images/Person.png";
import { Heading } from "rebass";
import TitleSetup from "../views/TitleSetup";
import HeadingBar from "../views/HeadingBar";
import MenuSetup from "../views/MenuSetup";
import { Link } from "@reach/router";
import "./main.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneMail,
  AiFillFacebook,
} from "react-icons/ai";

function Menubar() {
  var link = "mailto:likithayalavarthi95@gmail.com";
  return (
    <div
      style={{
        top: "0",
        bottom: "0",
        left: "0",
        position: "fixed",
        zIndex: "2",
        width: "25%",
        fontSize: "14px",
        color: "#fff",
        textAlign: "left",
        background: "#a51a1a",
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative ",
        }}
      >
        <ImageComponent image={personalimage} />
        <TitleSetup>
          <Heading
            as="h4"
            sx={{
              marginTop: "30px",
              fontSize: "22px",
              fontWeight: "500",
              marginLeft: "16px",
            }}
          >
            <Link to="/">LIKITHA YALAVARTHI</Link>
          </Heading>
          <Heading
            as="h4"
            sx={{
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "300",
              textTransform: "uppercase",
            }}
          >
            <Link className="header-style" to="/">
              Full-stack Software Engineer
            </Link>
          </Heading>
        </TitleSetup>
        <MenuSetup>
          <Link className="link-style" to="/experiencedetails/">
            <HeadingBar
              menuname="EXPERIENCE"
              key="1"
              style={{ color: "white" }}
              path="/experiencedetails/"
            />
          </Link>
          <Link className="link-style" to="/Projects/">
            <HeadingBar menuname="PROJECTS" key="2" path="/Projects/" />
          </Link>
          <Link
            className="link-style"
            style={{ textDecoration: "none" }}
            to="/Skills/"
          >
            <HeadingBar menuname="SKILLS" path="/Skills/" />
          </Link>
          <Link tabindex="1" className="link-style" to="/contactme/">
            <HeadingBar menuname="CONTACT ME" path="/contactme/" />
          </Link>
          <Link className="link-style" to="/MyCV/">
            <HeadingBar menuname="MY CV" path="/MyCV/" />
          </Link>
          <Heading
            as="h4"
            sx={{
              fontSize: "11px",
              fontWeight: "300",
              color: "#aaa",
              color: "rgba(255,255,255,.5)",
              marginBottom: "15px",
              marginTop: "40px",
            }}
          >
            GET IN TOUCH
          </Heading>
          <a className="social-style" href={link} target="_blank">
            <AiTwotoneMail />
          </a>
          <a
            className="social-style"
            href="https://www.linkedin.com/in/likitha-yalavarthi-51a1471aa/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="social-style"
            href="https://github.com/LikithaYalavarthi"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className="social-style"
            href="https://www.facebook.com/profile.php?id=100006936347694"
            target="_blank"
          >
            <AiFillFacebook />
          </a>
        </MenuSetup>
      </div>
    </div>
  );
}

export default Menubar;
