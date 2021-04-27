import React, { useState, useEffect }from 'react';
//import Navbar from '../Nav/Nav.js';
//import Footer from '../Footer/Footer.js';
import { 
    Typography,
    Box,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
 } from '@material-ui/core';
import Jumbotron from "../Jumbotron/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid/Grid";
import { List, ListItem } from "../List/List"; 
import { Input, TextArea, FormBtn } from "../Form/Form";
import SearchBar from "../Searchbar/Searchbar";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from '@material-ui/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const AlfaFont = createMuiTheme({
  typography: {
    fontFamily: [
      'Alfa Slab One',
      'cursive',
    ].join(','),
  },});



const useStyles = makeStyles({
  cardContainer: {
    background: "black",
    width: "100%",
    maxWidth: "275px",
    marginLeft: "5px",
    marginRight: "5px",
    borderWidth: "10px",
    borderColor: "black",
    paddingTop: "20px",
    paddingBottom: "20px", 
    paddingLeft: "50px",
    paddingRight: "50px", 
},
  cardContent: {
    background: "black",
  }
});

         

const LostItems = () => {

    //const classes = useStyles();
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

    //handleInput = (e)=> {
    //  console.log(e.target.value)
    //  this.setState({searchItem: e.target.value})
    //};

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

    const classes = makeStyles();
    //const font = createMuiTheme();

    return (

      <>
        
        <Box component="div">
          <Typography variant="h2" style={{ textAlign: "center", fontFamily: 'Alfa Slab One', color: "#3e70e5", }}>
             Lost & Found Items
          </Typography>
        </Box>
        
        <Container fluid>
        <Row>
          <Col size="md-6">
            <Card className={classes.cardContainer}>
              <CardActionArea style={{ background: "#bdab00" }}>
                <Typography variant="h4" style={{textAlign: "center", color: "white", fontFamily: 'Alfa Slab One'}}>
              Submit an Item
                </Typography>
              </CardActionArea>

              <CardContent style={{ background: "white" }}>
            <Jumbotron>
              <h1></h1>
            </Jumbotron>
            </CardContent>
            </Card>
            <br />
            <Card className={classes.cardContainer}>
              <CardActionArea style={{ background: "#bdab00" }}>
                <Typography variant="h5" style={{textAlign: "center", color: "white", fontFamily: 'Alfa Slab One' }}>
              Please Add a Description of your Item
                </Typography>
              </CardActionArea>

              <CardContent  style={{ background: "white" }}> 
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
              <CardActions>
              <FormBtn
                disabled={!(formObject.author && formObject.item)}
                onClick={handleFormSubmit}
              >
                Submit Item
              </FormBtn>
             </CardActions>
            </form>
            </CardContent> 
            </Card>
            <br/>
          </Col>
          <Col size="md-6 sm-12">
            <Card className={classes.cardContainer}>


            <CardActionArea style={{ background: "#bdab00" }}>
                <Typography variant="h4" style={{textAlign: "center", color: "white", fontFamily: 'Alfa Slab One' }}>
                 Lost/Found List
                </Typography>
              </CardActionArea>
              <CardContent style={{ background: "white" }}>
            <Jumbotron>
              <h1></h1>
            </Jumbotron>
            </CardContent>
            </Card>
            <br />
            <Card className={classes.cardContainer}>
              <CardActionArea style={{ background: "#bdab00" }}>
                <Typography variant="h4" style={{textAlign: "center", color: "white", fontFamily: 'Alfa Slab One' }}>
                  Search Bar
                  </Typography>
              </CardActionArea>
              <CardContent style={{ background: "white" }}>
            <SearchBar/>
            {Items.length ? (
              <List>
                {Items.map(Item => (
                  <ListItem key={Item._id}>
                    <Link to={"/items/" + Item._id}>
                      <strong>
                        {Item.item} : {Item.author} : {Item.status}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </CardContent>
            </Card>
            <br/>
          </Col>
        </Row>
      </Container>
        
        { /* <Footer /> */ }
        </>
    )
  
}
export default LostItems
