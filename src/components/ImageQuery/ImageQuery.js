import React from "react";
import {  Image } from "react-bootstrap";
import "./ImageQuery.css";

const ImageQuery = ({ imageUrl }) => {
  return (
      <div>
        <Image className="m-3"
          id="inputImage"
          alt=""
          src={imageUrl}
        />
      </div>
  );
};

export default ImageQuery;