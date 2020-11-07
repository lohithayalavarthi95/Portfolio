import React from "react";
import { Heading } from "rebass";
import { useLocation } from "@reach/router";

function HeadingBar(props) {
  const { menuname, marginTopProp, path } = props;
  const location = useLocation();
  console.log("location", location.pathname === "/Projects/", location);
  return (
    <Heading
      as="h4"
      sx={{
        marginTop: marginTopProp || "10px",
        fontSize: "16px",
        fontWeight: "300",
        textTransform: "uppercase",
        color: location.pathname === path ? "white" : "darkgrey",
      }}
    >
      {menuname} {location.pathname === path ? ">" : ""}
    </Heading>
  );
}

export default HeadingBar;
