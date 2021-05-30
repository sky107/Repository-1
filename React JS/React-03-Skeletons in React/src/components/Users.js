import React,{useState,useEffect} from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const Users=()=>{

const [profile,setProfile]=useState(null);

useEffect(()=>{
setTimeout(async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/users');
const data=await res.json();
setProfile(data);

},5000)

},[])


return(<div className="user">
	<h2>User Details</h2>



	{profile && profile.map(x=>(
	<div>
	{x.name}<br/>
	{x.email}<br/>
	<br/>
	
	</div>)) }

		{!profile && [1,2,3,4,5].map((x)=><SkeletonProfile key={x} />) }

	</div>);

}
export default Users;