const { validationResult } = require("express-validator");

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
  //Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "SuperMan" },
      createdAt: new Date(),
    },
  });
};
