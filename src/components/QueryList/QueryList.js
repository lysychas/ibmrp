import React from "react";
import { Container, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import "./QueryList.css";

const QueryList = ({ queryList }) => {
  return (
    <Container fluid>
      <ListGroup horizontal as="ul" id="query-list">
        {queryList.map((query, index) => {
          return (
            <ListGroupItem
              as="li"
              key={index}
              className=""
            >
              <Image
                className=" queryListImg"
                id={index}
                alt=""
                src={query.imgUrl}
              />

              {query.foundObjects.map((object, index) => {
                return (
                  <ListGroupItem variant="flush">{`${object}`}</ListGroupItem>
                );
              })}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default QueryList;
