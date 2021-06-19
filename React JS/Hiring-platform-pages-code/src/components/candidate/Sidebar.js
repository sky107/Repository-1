import React from 'react';
import {Icon,Divider} from 'rsuite';
import classes from './Sidebar.module.css';


export default (props)=>{

	return(<>
		<div className={classes.main}>
		<div className={classes.['sidemenu-section']}>Navigation</div>
		{['Resume','Interview','Offer'].map(x=>(<div className={classes.[`item${props.on===x?"-active":""}`]}><Icon icon="home" className={classes.['item-icon']}/>{x}</div>))}
			<Divider className={classes.divider}/>
		<div className={classes.['sidemenu-section']}>JOBS</div>
		{['Applied Jobs','Map Jobs','Live Jobs'].map(x=>(<div className={classes.[`item${props.on===x?"-active":""}`]}><Icon icon="home" className={classes.['item-icon']}/>{x}</div>))}
			<Divider className={classes.divider}/>
			<div className={classes.['sidemenu-section']}>SUPPORT</div>
		{['Help Desk','Tutorial','Feedback'].map(x=>(<div className={classes.[`item${props.on===x?"-active":""}`]}><Icon icon="home" className={classes.['item-icon']}/>{x}</div>))}
		
		</div>
		</>);
}