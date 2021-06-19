import React from 'react';
import classes from './JobCard.module.css';
export default ()=>{

	return(<>
		<div className={classes.['job-card']}>
			<table>
			<tbody>
			<tr>
			<td style={{fontWeight:600,textDecoration:'underline'}}>Web Development</td>
			<td style={{paddingLeft:50}}> 3 Jun 2021</td>
			</tr>
			<tr>
			<td><b>Location</b>&nbsp;<span>Bengaluru</span></td>
			<td></td>
			</tr>
			<tr>
			<td><b style={{fontWeight:500}}>Status</b>: Pending..</td>
			<td></td>
			</tr>
			<tr>
			<td><b style={{fontWeight:500}}>Screen</b></td>
			<td> Interview</td>
			</tr>
			<tr>
			<td><b style={{fontWeight:500}}>Offer</b></td>
			<td> Onholds</td>
			</tr>
			<tr>
			<td>Rejected</td>
			<td>	</td>
			</tr>

			<tr>
			<td>Candidate</td>
			<td><b style={{fontWeight:500}}>More</b></td>
			</tr>
			</tbody>

			</table>
		</div>
		
		</>);
}