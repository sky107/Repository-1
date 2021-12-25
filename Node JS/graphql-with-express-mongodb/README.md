
In this mini-project I have used grapql along with express-graphql to perform query and mutation along with custom error handling using validator pckg , with the help of ODM library mongoose its easy to manage data and store in mongodb


query { hello { views }}


mutation {
  createUser(userInput: {email: "siddharthsk101@gmail.com", name: "Siddharth", password: "tester"}) {
    _id
    name
    email
  }
}




[Video Demonstration Link Here](https://youtu.be/GECqaQx9gLc)


![alt text](https://res.cloudinary.com/df2q7cryi/image/upload/v1640447835/Untitled_djtxtj.png)