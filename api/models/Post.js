const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userID : {type: String, required: true},
    content: {type: String, max     : 500},
    image  : {type: String},
    likes  : {type: Array,  default : []}
},{timestamps:true}
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;