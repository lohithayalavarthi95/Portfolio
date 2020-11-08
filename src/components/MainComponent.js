import React from "react";
import Menubar from "./Menubar";
import ContentBody from "./ContentBody";
import Home from "./Home";
import MyCV from "./MyCV";
import { Flex } from "rebass";

function MainComponent(props) {
  const { path } = props;
  return (
    <>
      {path == "/MyCV/" ? (
        <div id="page2">
          <MyCV />
        </div>
      ) : (
        <Flex>
          <Menubar />
          <ContentBody {...props} />
        </Flex>
      )}
    </>
  );
}

export default MainComponent;
