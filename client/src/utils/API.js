import axios from "axios";

export default {
  // Gets all lost items
  getLostItems: function() {
    return axios.get("/api/lost");
  },
  // Gets the lost item with the given id
  getLostItem: function(id) {
    return axios.get("/api/lost/" + id);
  },
  // Gets all lost items
  getFoundItems: function(){
    return axios.get("/api/found/" + id);
  },
  // Gets the lost item with the given id
  getFoundItem: function(){
    return axios.get("/api/found/" + id);
  },
  // Deletes the found item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/found/" + id);
  },
  // Saves a lost to the database
  saveItem: function(itemData) {
    return axios.post("/api/lost", itemData);
  }

};
