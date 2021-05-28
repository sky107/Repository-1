const {validationResult}=require('express-validator/check');
const Post=require('../models/post');


exports.getPosts = (req, res, next) => {
const errors=validationResult(req);
if(!errors.isEmpty()){
return res.status(422).json({
message:'Validation failed',
errors:errors.array()
});

}

  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Maximilian'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const post=new Post({
	title:title,
content:content,
creator:{name:'Siddharth'},
});
post.save().then(res=>{
console.log(res);

 res.status(201).json({
    message: 'Post created successfully!',
    post: res
  });
}).catch(e=>console.log(e))




  // Create post in db
 
};
