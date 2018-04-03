var fs = require("fs");

//Blog Server functions
function readBlogsFile (callback) {
    fs.readFile('./DB/blogs.json', 'utf8', callback);
}

function writeBlogFile (data, callback) {
    fs.writeFile('./DB/blogs.json', data, 'utf8', callback);
}

function getBlogs(res) {
    var obj;
    readBlogsFile( function(err, data) {
        if(err) throw err; 
        obj = JSON.parse(data);
        res.send(obj);
    });
}

function getBlogwithId(id, res) {
    readBlogsFile( function(err, data) {
        if(err) throw err;
        let blogArr = JSON.parse(data);
        let blog = blogArr.filter((blog) => {
            return string(blog.id) === id;
        });
        res.send(blog[0]);
    });
}

function updateBlogwithId(id, data, res) {
    let blogArr, blog;
    readBlogsFile( function(err, data) {
        if(err) throw err;
        blogArr = JSON.parse(data);
        blog = blogArr.filter((blog) => {
            return string(blog.id) === id;
        })[0];
        blog.content = data.content;
        blog.author = data.author;
        blog.title = data.title;
        writeBlogFile(JSON.stringify(blogArr), function(err) {
            if(err) throw err;
            res.send(blog);
        });
    });
}

function updateBlogVotes(id, data, res) {
    let blogArr, blog;
    readBlogsFile( function(err, data) {
        if(err) throw err;
        blogArr = JSON.parse(data);
        blog = blogArr.filter((blog) => {
            return string(blog.id) === id;
        })[0];
        blog.thumbsUp = data.thumbsUp;
        blog.thumbsDown = data.thumbsDown;
        writeBlogFile(JSON.stringify(blogArr), function(err) {
            if(err) throw err;
            res.send(blog);
        });
    });
}

function addBlog(data, res) {
    let blogArr, blog;
    readBlogsFile( function(err, data) {
        if(err) throw err;
        blogArr = JSON.parse(data);
        blogArr.push(data);
        writeBlogFile(JSON.stringify(blogArr), function(err) {
            if(err) throw err;
            res.send({ status: "Successfully added" });
        });
    });
}

module.exports = {
    getAllBlogs: getBlogs,
    getBlogwithId: getBlogwithId,
    updateBlogwithId: updateBlogwithId,
    updateBlogVotes: updateBlogVotes,
    addBlog: addBlog
}