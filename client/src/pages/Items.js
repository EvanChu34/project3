import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";

function Items() {
  // Setting our component's initial state
  const [Items, setItems] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Items and store them with setItems
  useEffect(() => {
    loadItems()
  }, [])

  // Loads all Items and sets them to Items
  function loadItems() {
    API.getItems()
      .then(res => 
        setItems(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveItem method to save the Item data
  // Then reload Items from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    const newReport = {
      item: formObject.item,
      author: formObject.author,
      description: formObject.description,
      location: formObject.location,
      date: formObject.date,
    }

    axios.post('http://localhost:3001/report', newReport)
    // if (formObject.item && formObject.author) {
    //   API.saveItem({
    //     item: formObject.item,
    //     author: formObject.author,
    //     description: formObject.description,
    //     location: formObject.location
    //   })
    //     .then(res => loadItems())
    //     .catch(err => console.log(err));
    // }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1></h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="item"
                placeholder="Item name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Location lost (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="status"
                placeholder="Item Status (Required)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.item)}
                onClick={handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items On My List</h1>
            </Jumbotron>
            {Items.length ? (
              <List>
                {Items.map(Item => (
                  <ListItem key={Item._id}>
                    <Link to={"/Items/" + Item._id}>
                      <strong>
                        {Item.item} by {Item.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Items;
