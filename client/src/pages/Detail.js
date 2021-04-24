import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [Item, setItem] = useState({})

  // When this component mounts, grab the Item with the _id of props.match.params.id
  // e.g. localhost:3000/Items/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getItem(id)
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {Item.title} : {Item.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {item.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2>Location</h2>
              <p>
                {item.location}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2>Status</h2>
              <p>
                {item.status}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Item List</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
