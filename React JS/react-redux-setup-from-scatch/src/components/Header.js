import React from 'react';
import { useHistory } from "react-router-dom";
import { Icon } from '@rsuite/icons';
import classes from './Header.module.css';


const Navbar=(props)=>{
	const history=useHistory();
return(<>
<div className={classes.main}>
<div className={classes['company-logo']}>
<img className={classes["hamburger_menu_key"]}  src="/images/hamburger-menu.svg"  alt="/img" />
<div className={classes['company-logo-image']} >   COMPANYLOGO</div>
</div>

<div className={classes['main-tools']}>

<div className={classes['main-tools-item-dashboard']}>
Dashboard
</div>
<div className={classes['main-tools-item']}>
<Icon icon="envelope"/>
</div>
<div className={classes['main-tools-item-more']}>

<div className={classes.classesdropdown}>
 <Icon icon="user-circle" /> &nbsp;&nbsp;Siddharth  &nbsp;<Icon icon="arrow-down"/>
  <div onClick={()=>history.push('/')} className={classes["dropdown-content"]}>

  <Icon icon="sign-out" /> Log-Out
  </div>
</div>

</div>


</div>
</div>

</>);


}
export default Navbar;
                  