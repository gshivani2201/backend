const { validationResult } = require("express-validator");

const Post = require("../models/post");

exports.getposts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First post",
        content: "Here goes my content",
        imageUrl: "images/unicorn.jpg",
        creator: {
          name: "Batman",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation failed", error: errors.array() });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: "images/duck.jpg",
    creator: { name: "SuperMan" },
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      //Create post in db
      res.status(201).json({
        message: "Post created successfully!",
        post: result,
      });
    })
    .catch((err) => console.log(err));
};
