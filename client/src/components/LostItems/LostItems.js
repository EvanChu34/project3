import React, { useState, useEffect }from 'react';
import Navbar from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { 
    Typography,
    Box
 } from '@material-ui/core';
import Jumbotron from "../Jumbotron/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid/Grid";
import { List, ListItem } from "../List/List"; 
import { Input, TextArea, FormBtn } from "../Form/Form";
import axios from "axios";
import Filter from "../Filter/Filter";
 
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles();

const LostItems = () => {

    const classes = useStyles();
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
        status:formObject.status,
        date: formObject.date,
      }
  
      axios.post('http://localhost:3001/report', newReport)
       if (formObject.item && formObject.author) {
         API.saveItem({
           item: formObject.item,
           author: formObject.author,
           description: formObject.description,
           location: formObject.location,
           status:formObject.status,
         })
           .then(res => loadItems())
           .catch(err => console.log(err));
       }
    };

    return (
        <>
        <Navbar />
        <Box component="div">
          <Typography variant="h2">
             Lost/Found Items
          </Typography>
        </Box>
        <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Summit a item</h1>
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
                placeholder="Location lost/found (Required)"
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
              <h1>Lost/Found List</h1>
            </Jumbotron>
            <Filter/>
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

        <Footer />
        </>
    )
}

export default LostItems
