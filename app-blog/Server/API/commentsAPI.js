var fs = require('fs');

//Comment server functions
function readCommentsFile(callback) {
    fs.readFile('./DB/comments.json', 'utf8', callback);
}

function writeCommentsFile(data, callback) {
    fs.writeFile('./DB/comments.json', 'utf8', callback);
}

function getBlogComments(blogId, res) {
    readCommentsFile( function(data, err) {
        if(err) throw err;
        let commentsArr = JSON.parse(data);
        let blogComments = commentsArr.filter((blogComment) => {
            return string(blogComment.blogId) === blogId;
        });
        res.send(blogComments);
    });
}

function addBlogComments(data, res) {
    let commentArr, comment;
    readCommentsFile( function(data, err) {
        if(err) throw err;
        commentArr = JSON.parse(data);
        commentArr.push(data);
        writeCommentsFile(JSON.stringify(commentArr), function(err) {
            if(err) throw err;
            res.send({ status: "Comment added successfully" });
        });
    });
}

module.exports = {
    getBlogComments: getBlogComments,
    addBlogComments: addBlogComments
}

