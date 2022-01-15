

const record = require('../models/record');
const Record = require('../models/record');



exports.getsavedRecords= async (req, res, next) => {
        console.warn("ENTERED");

        if(req.isAuth===false){
                res.status(400).send("Unauthourized");
        }
        try {

                let {page}=req.query;

                const perPage=10
                if(!page){
                        page=1;
                }
              const records = await Record.find({creator:req.userId})
              const totalPages=await Record.find({creator:req.userId}).countDocuments()/perPage;


                
                const data=await Record.find({creator:req.userId}).sort({createdAt:-1}).skip((page-1)*perPage)
                .limit(perPage)


              res.status(201).send({
                      total_pages:Math.ceil(totalPages),
                      current_page:page,
                      data:data
              });
        }

        catch (err) {
                console.debug(err);
                res.status(400).send("Wrong user");
        }



        


}

exports.deleteRecord=async (req,res,next)=>{
        if(req.isAuth==false){
                res.json({
                        errorMessage:"Unauthorized"
                })
        }
        try {

                const {recordId}=req.body;

                const deletedRecord = await record.findByIdAndDelete(recordId)


                res.json({
                        response:"deleted"
                })
        }

        catch (err) {
                console.debug(err);
                res.json({
                        errorMessage: "Server in Error"
                })
        }



}
exports.postSaveRecord=async (req,res,next)=>{


        
        if(req.isAuth==false){
                res.json({
                        errorMessage:"Unauthorized"
                })
        }
        try {

                const {name,symbol,cmc_rank,circulating_supply,market_cap,percent_change_24h,percent_change_7d}=req.body;

                console.warn(req.userId);

                const record = new Record({
                        name:name,
                        cmc_rank:cmc_rank,
                        symbol:symbol,
                        circulating_supply, circulating_supply,
                        market_cap: market_cap,
                        percent_change_24h: percent_change_24h,
                        percent_change_7d: percent_change_7d,
                        creator:req.userId
                });

                const createdRecord = await record.save();


                res.json({
                        response:"created"
                })
        }

        catch (err) {
                console.debug(err);
                res.json({
                        errorMessage: "Server in Error"
                })
        }
}

// {"circulating_supply":"123",
// "market_cap":"123",
// "percent_change_24h":"23423",
// "percent_change_7d":"2324"
// }