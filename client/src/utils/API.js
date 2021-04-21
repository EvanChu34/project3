import axios from "axios";

export default {
  // Gets all lost items
  getItems: function() {
    return axios.get("/api/item");
  },
  // Gets the lost item with the given id
  getItem: function(id) {
    return axios.get("/api/item/" + id);
  },
  // Gets all lost items
  // Deletes the found item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/found/" + id);
  },
  // Saves a lost to the database
  saveItem: function(itemData) {
    return axios.post("/api/lost", itemData);
  }

};
