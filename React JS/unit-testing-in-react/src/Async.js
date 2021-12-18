import React, { useState } from "react";

export default () => {
	const [posts, setPosts] = useState([]);

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((res) => {
				setPosts(res);
			});
	}, []);

	return (
		<>
			<ul>
				{posts.map((e) => (
					<li key={e.id}>{e.title}</li>
				))}
			</ul>
		</>
	);
};