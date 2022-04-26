const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema( {
    tiltle:{
        required:true,
        type:String    
    },
    body:{
        required:String,
        type:Sting
    },
    authroId:{
        required:true,
        type:ObjectId,
        ref:'Author'     
    },
    tags:{
        type:[String],
    },
    category:{
        type:[String],
        require:true
    },
    subcategory:{
        type:[String]
    },
    createAt:{timestamps:true},
    updateAt:{timesteamps:true},
    deleteAt:{
        timestamps:true
    },
    isDeleted:{
        type:Boolean,
    },
    pulbishedAt:{

    },
    isPublished:{
        type:Boolean,
        default:false

    }

    // lastName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,
    // // isIndian: Boolean,
    // // parentsInfo: {
    // //     motherName: String,
    // //     fatherName: String,
    // //     siblingName: String
    // // },
    // // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array