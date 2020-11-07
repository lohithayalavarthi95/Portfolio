import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumepdf from "../resources/Documents/Resume_Likitha.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function MyCV() {
  return (
    <div
      id="page2"
      style={{
        width: "782px",
        padding: "80px 80px 60px",
        margin: "80px auto",
        backgroundColor: "#fff",
        boxShadow: "2px 2px 1px #606060",
      }}
    >
      <Document file={resumepdf}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
