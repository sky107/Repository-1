import React from 'react';
import SkeletonElement from './SkeletonElement';
import Skimmer from './SKimmer';
const SkeletonArticle=()=>{


return(
<div className="skeleton-wrapper">
	
	<div className="skeleton-article">
	
	<SkeletonElement type="title" />
<SkeletonElement type="text" />
<SkeletonElement type="text" />
<SkeletonElement type="text" />
	
	</div>

<Skimmer/>
</div>



);
}
export default SkeletonArticle;