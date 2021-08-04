import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./ObjectList.css";

const ObjectList = ({ objectList }) => {
  return (
    <div>
      <ListGroup className="m-3">
        {objectList.map((object, index) => {
          return <ListGroupItem key={index}>{object}</ListGroupItem>;
        })}
      </ListGroup>
    </div>
  );
};
export default ObjectList;
