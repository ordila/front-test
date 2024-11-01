"use client";
import { useParams } from "next/navigation";
import React from "react";

const LabelPage = () => {
  const { labelID } = useParams();

  return <div>Label page for label {labelID}</div>;
};

export default LabelPage;
