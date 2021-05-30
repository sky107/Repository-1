import React,{useState,useEffect} from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';
const Articles=()=>{
const [articles,setArticles]=useState(null);

useEffect(()=>{
setTimeout(async ()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/posts');
const data=await res.json();
setArticles(data);},5000)
},[])

return(<div className="articles">
	<h2>Articles</h2>
	{articles && articles.map(x=>(
	<div className="article" key={x.id}>
	<p>{x.body}</p>
	
	</div>))}
	
	{!articles && [1,2,3,4,5].map((x)=><SkeletonArticle key={x} />) }


	</div>);

}
export default Articles;