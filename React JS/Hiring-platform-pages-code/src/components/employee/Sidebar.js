import React from 'react';
import {useHistory} from 'react-router-dom';
import {Icon,Divider} from 'rsuite';
import classes from './Sidebar.module.css';


export default (props)=>{
	const history=useHistory();
	const HISTORY_PATH=['/users/dashboard',
						'/users/jobs',
						'/users/candidate',
						'/users/approvals',
						'/users/reports',
						'/users/helpdesk',
						'/users/tutorial',
						'/users/feedback']
	return(<div className="emp-sidebar">
		<div className={classes.main}>
		<div className={classes.['sidemenu-section']}>Navigation</div>
		{['Dashboard','Jobs','Candidate','Approvals','Reports'].map((x,i)=>(<div onClick={()=>history.push(`${HISTORY_PATH[i]}`)} className={classes.[`item${props.on===x?"-active":""}`]}><Icon icon="home" className={classes.['item-icon']}/>{x}</div>))}
			<Divider className={classes.divider}/>

			<div className={classes.['sidemenu-section']}>SUPPORT</div>
		{['Help Desk','Tutorial','Feedback'].map(x=>(<div className={classes.[`item${props.on===x?"-active":""}`]}><Icon icon="home" className={classes.['item-icon']}/>{x}</div>))}
		
		</div>
		</div>);
}