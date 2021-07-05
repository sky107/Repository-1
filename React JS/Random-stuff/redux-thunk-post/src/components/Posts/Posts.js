import React from "react";
import PostCard from "./PostCard";
import { useSelector,useDispatch } from "react-redux";
import {getAllPost} from "../../actions/postAction";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
const dispatch=useDispatch();

React.useEffect(() => {
//console.log("FIRST LOAD")
dispatch(getAllPost());
  }, []);

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
