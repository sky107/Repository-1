class Post {
	title;
	text;
	creatorId;
	constructor(title, text, creatorId) {
		this.title = title;
		this.text = text;
		this.creatorId = creatorId
	}

	static privatefunc() {
		// this will not be accessible outside this class 
	}

	save() {
		console.log("SAVING POST");
	}
}


class PhotoPost extends Post {
	URL;
	constructor(title, text, creatorId, URL) {
		super(title, text, creatorId);
		this.URL = URL
	}

	save() {
		console.log("SAVING POHTOPOST");
	}

}


class VideoPost extends Post {
	ratings;
	URL;
	constructor(title, text, creatorId, URL, ratings) {
		super(title, text, creatorId);
		this.URL = URL;
		this.ratings = ratings
	}


	save() {
		console.log("SAVING VIDEOPOST");
	}
}


const obj1 = new Post('a', 'b', 'c');
const obj2 = new PhotoPost('a', 'b', 'c', 'd');
const obj3 = new VideoPost('a', 'b', 'c', 'd', 'e');
console.log(obj1);
console.log(obj2);
console.log(obj3);

obj1.save();
obj2.save();
obj3.save();