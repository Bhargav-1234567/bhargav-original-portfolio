"use client";
import { Document, PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import MyDoc from "../../assets/Bhargav Gadhiya.pdf";

const Experience = () => {
  return (
    <div
      className={`custom-animation animate-custom `}
      style={{ height: "calc(100vh - 120px)" }}
    >
      <iframe src={MyDoc} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default Experience;
