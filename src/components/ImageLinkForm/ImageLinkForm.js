import React from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="text-center">
      <p className="">
        This app will detect objects in your pictures. Give it a try.
      </p>
      <InputGroup className="formSearchContainer">
        <FormControl
          className=""
          type="text"
          onChange={onInputChange}
        />
        <Button className="formSearchButton" onClick={onButtonSubmit}>
          Detect
        </Button>
      </InputGroup>
    </div>
  );
};

export default ImageLinkForm;
