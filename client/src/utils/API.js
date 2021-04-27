import axios from "axios";

export default {
  // Gets all  items
  getItems: function() {
    return axios.get("/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/items/" + id);
  },
  // Gets all  items
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/items/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/items", itemData);
  }

};
