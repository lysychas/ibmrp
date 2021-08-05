import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageQuery from "./components/ImageQuery/ImageQuery";
import ObjectList from "./components/ObjectList/ObjectList";
import QueryList from "./components/QueryList/QueryList";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [objectList, setObjectList] = useState([]);
  const [queryList, setQueryList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://morning-fjord-83611.herokuapp.com/api/image");
      setQueryList(result.data);
    })();
  }, [imageUrl]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = async () => {
    try {
      const response = await axios.post("https://morning-fjord-83611.herokuapp.com/api/image", {
        imgUrl: input,
      });
      if (response.data) {
        setImageUrl(input);
        setObjectList(response.data.foundObjects);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container my-auto fluid className="App">
      <Row>
        <Col >
          <ImageLinkForm
            className="linkForm"
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <ImageQuery className="imageQuery" imageUrl={imageUrl} />
        </Col>
        <Col className="d-flex justify-content-start">
          <ObjectList className="objectList" objectList={objectList} />
        </Col>
      </Row>
      <Row>
        <Col>
          <QueryList className="d-flex justify-content-center" queryList={queryList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
