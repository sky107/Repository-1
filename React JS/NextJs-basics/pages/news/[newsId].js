import {useRouter} from 'next/router';

export default function(){

const router=useRouter();
const newsId=router.query.newsId;
console.log(router);

return (<h1> Parmas</h1>);



};