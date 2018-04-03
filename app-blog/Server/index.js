var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

var BlogAPI = require("./API/blogAPI");
var CommentAPI = require("./API/commentsAPI");

var app = express();

//app path handlers
app.use(bodyParser.json());
app.use('/', express.static('./public', { index: "index.html" }));
// app.use('/', express.static(path.join(__dirname, 'public')));

//blog paths
app.use("/getAllBlogs", (req, res) => {
    BlogAPI.getAllBlogs(res);
});

app.use("/getBlog", (req, res) => {
    BlogAPI.getBlogwithId(req.query['id'], res);
});

app.put("/updateBlog", (req, res) => {
    BlogAPI.updateBlogwithId(req.body.id, req.body, res);
});

app.put("/updateBlogVotes", (req, res) => {
    BlogAPI.updateBlogVotes(req.body.id, req.body, res);
});

app.post("/addBlog", function(req, res) {
    BlogAPI.addBlog(req.body, res);
});

//Comment Paths
app.use("/getBlogComments", (req, res) => {
    CommentAPI.getBlogComments(req.query['blogId'], res);
});

app.post("/addBlogComment", (req, res) => {
    CommentAPI.addBlogComments(req.body, res);
});

//fallback path
app.use('*', express.static('./public', { index: "index.html"}));
// app.use('*', express.static(path.join(__dirname, 'public')));

//bootstrap express middleware - listen to incoming requests from client
var server = app.listen(4201, "127.0.0.1", function () { });
