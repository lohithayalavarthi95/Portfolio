import React from "react";

function ContentBody(props) {
  const ComponentDetails = props.Component;
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "75%",
        marginLeft: "25%",
      }}
    >
      <ComponentDetails />
    </div>
  );
}

export default ContentBody;
