const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup"); 
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  app.get("/chat", (req, res) => {

    const username = req.user.username;
    console.log(username);
    res.render("chat");
  });

  app.get("/userlogout", (req, res) => {
    res.render("logout");
  });
};
