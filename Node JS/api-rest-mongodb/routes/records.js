/** Siddharth Kumar Yadav
* © All rights reserved 
*/
const express=require('express');
const router=express.Router();

const records=require('../controllers/records')

console.log("HI")
// route.get('/user/records',records.getsavedRecords);
router.get('/user/saved-records',records.getsavedRecords);
router.post('/user/save-record',records.postSaveRecord);
router.delete('/user/delete-record',records.deleteRecord);

// router.get('/user/stocks',stocks.getAllStocks);

module.exports=router;