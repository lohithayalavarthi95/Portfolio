import React from "react";
import { AiFillEdit } from "react-icons/ai";

function ContentHeader(props) {
  const {
    headername,
    subtitlename,
    marginLeftprop,
    iconpresent,
    ...rest
  } = props;
  return (
    <div
      style={{
        marginLeft: marginLeftprop || "34px",
        color: "#555",
        width: "700px",
        marginTop: "40px",
      }}
    >
      {iconpresent && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <AiFillEdit
            style={{
              fontWeight: "300",
              fontSize: "24px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          />
          <h1 style={{ color: "#bb1e1e", fontSize: "20px" }}>{headername}</h1>
        </div>
      )}
      {!iconpresent && <h1 style={{ color: "#555" }}>{headername}</h1>}
      {subtitlename && <p>{subtitlename}</p>}
      {props.children}
    </div>
  );
}

export default ContentHeader;
