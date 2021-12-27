
In this mini-project I have used graphql along with express-graphql to perform query and mutation along with custom error handling using validator pckg , with the help of ODM library mongoose its easy to manage data and store in mongodb





-----------------------------------------

User Creation
------------



mutation M($u: UserInputData) {
  createUser(userInput: $u) {
    _id
    name
    email
  }
}



QUERY VARIABLES



{
  "u": {
    "email": "test@gmail.com",
    "name": "Siddharth",
    "password": "tester"
  }
}



----------------------------------------------------------------------------

Sign In
------


query Q($e:String!,$p:String!){
  login(email:$e,password:$p){
    userId
    token
  }
}





QUERY VARIABLES




{
  "e":"test@gmail.com",
  "p":"tester"
}




--------------------------------------------------------------------------

create Post
----------

JSON FORMAT


{
  "query":"mutation M($p: PostInputData!) { createPost(postInput: $p) { _id title createdAt updatedAt } }",
  "variables":{ "p": { "title": "test-post1", "content": "test-content", "imageUrl": "test-cloudinary" } }
  
}






mutation M($p: PostInputData!) {
  createPost(postInput: $p) {
    _id
    title
    createdAt
    updatedAt
  }
}






QUERY VARIABLES




{
  "p": {
    "title": "test-post1",
    "content": "test-content",
    "imageUrl": "test-cloudinary"
  }
}


-----------------------------------------------------


Get user Details
--------
JSON FORMAT



{
  "query":"query { user{ email name status posts { _id  } } }"
}



---------------------------------
Get All Post
------------
JSON FORMAT





{
  "query":"query { posts { posts{ _id title createdAt updatedAt } } }"
}



-------------------------
Get Post by Id
---------
JSON FORMAT



{
  "query":"query Q($id:ID!) { post(id:$id){ _id title createdAt updatedAt } }",
  "variables":{"id":"61c9c0b5606a950a7c1a630b"}
}


---------------------
update a Post by Id
------------
JSON FORMAT




{
  "query":"mutation M($id:ID!,$p:PostInputData){ updatePost(id:$id,postInput:$p){ _id content imageUrl title}}",
  "variables":{ "id": "61c9c8a0abb909069cc83eeb", "p": { "title": "new-title", "content": "new-content", "imageUrl": "new-image-url" } }
}



---------------------------------------
 Delete Post
 ---------

 JSON FORMAT


{
  "query":"mutation M($id:ID!){ deletePost(id:$id) }",
  "variables":{"id":"61c9c0b5606a950a7c1a630b"}
}
