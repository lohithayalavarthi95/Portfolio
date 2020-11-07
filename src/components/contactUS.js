import React from "react";
import ContentHeader from "./ContentHeader";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiTwotoneMail,
  AiFillFacebook,
} from "react-icons/ai";
import { Router, Link } from "@reach/router";
import SocialStyling from "../views/SocialStyling";

function contactUS() {
  var link = "mailto:likithayalavarthi95@gmail.com";
  return (
    <div style={{ height: "900px" }}>
      <ContentHeader
        headername="CONTACT ME"
        subtitlename="I am available for hire and open to any ideas of cooperation."
      >
        <div style={{ marginTop: "44px" }}>
          <SocialStyling
            classNameDes="social-styling"
            socialdescription="likithayalavarthi95@gmail.com"
            socailSitename="Email:"
            socialComponent={AiTwotoneMail}
            sociallink={link}
          />
          <SocialStyling
            classNameDes="social-styling"
            socialdescription="likithayalavarthi"
            socailSitename="LinkedIn : "
            socialComponent={AiFillLinkedin}
            sociallink="https://www.linkedin.com/in/likitha-yalavarthi-51a1471aa/"
          />
          <SocialStyling
            classNameDes="social-styling"
            socialdescription="likithayalavarthi95"
            socailSitename="Twitter : "
            socialComponent={AiFillTwitterCircle}
            sociallink="https://twitter.com/likithayalavarthi"
          />
          <SocialStyling
            classNameDes="social-styling"
            socialdescription="likithayalavarthi"
            socailSitename="Facebook : "
            socialComponent={AiFillFacebook}
            sociallink="https://www.facebook.com/profile.php?id=100006936347694"
          />
        </div>
      </ContentHeader>
    </div>
  );
}

export default contactUS;
