const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const recordSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    cmc_rank:{
      type:String,
        required:true
    },symbol:{
      type:String,
        required:true
    },
	circulating_supply:{
		type : String,
		required:true
	},market_cap:{
		type : String,
		required:true
	},percent_change_24h:{
		type : String,
		required:true
	},
    percent_change_7d:{
        type:String,
        required:true
    },
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, { timestamps: true });

module.exports=mongoose.model('Record',recordSchema);
