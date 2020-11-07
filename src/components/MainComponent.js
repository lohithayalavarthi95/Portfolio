import React from "react";
import Menubar from "./Menubar";
import ContentBody from "./ContentBody";
import Home from "./Home";
import MyCV from "./MyCV";

function MainComponent(props) {
  const { path } = props;
  return (
    <>
      {path == "/MyCV/" ? (
        <div id="page2">
          <MyCV />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Menubar />
          {path == "/" ? <Home /> : <ContentBody {...props} />}
        </div>
      )}
    </>
  );
}

export default MainComponent;
