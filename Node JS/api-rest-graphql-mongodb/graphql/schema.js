const {buildSchema} =require('graphql');


module.exports=buildSchema(`

	type Post {
		_id:ID!
		title:String!
		createdAt:String
		updatedAt:String
		
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

	type AuthData{
		token:String!
		userId:String!
	}


	input PostInputData {
		title:String!
		content:String!
		imageUrl:String!
	}

	type PostData {
		posts:[Post!]!
		totalPosts:Int!
	}
	

	type RootQuery {
		hello :TestData!
		login(email:String!,password:String!): AuthData!
		posts(page:Int):PostData!
		post(id:ID!):Post!
	}




	type RootMutation {
			createUser(userInput:UserInputData): User!
			createPost(postInput:PostInputData): Post!
	}


	schema {
		query : RootQuery
		mutation: RootMutation
	  }
	`)