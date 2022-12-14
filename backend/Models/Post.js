const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likeCount:{
    type: Number,
    required: true,
  },
  commentCount:{
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
