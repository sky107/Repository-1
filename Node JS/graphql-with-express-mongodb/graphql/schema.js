const {buildSchema} =require('graphql');


module.exports=buildSchema(`

	type Post {
		_id:ID!
		title:String!

	}

	type User {
		_id:ID!
		name:String!
		email:String!
		password:String!
		status:String!
		posts:[Post]!
	}

	input UserInputData {
		email:String!
		name:String!
		password:String!
	}

	type TestData {
		text: String!
		views: Int!
	}

	type RootQuery {
		hello :TestData!
	}

	type RootMutation {
		
			createUser(userInput:UserInputData): User!

	}


	schema {
		query : RootQuery
		mutation: RootMutation

	  }
	`)