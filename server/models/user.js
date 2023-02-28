/*
Name: Jin Huang
StudentId: 301020707
*/
//require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { update } = require('./books');
let user = mongoose.Schema({
    username:
    {
        type:String,
        default: '',
        trim: true,
        required:'username is required'
    },

    /*password:
    {
        type:String,
        default:'',
        trim:true,
        required:'password is required'
    }
    */
   email:
   {
    type:String,
    default: '',
    trim:true,
    required:'email address is required'
   },
   displayName:
   {
    type:String,
    default: '',
    trim:true,
    required:'display name is required'
   },
   created:
   {
    type: Date,
    default:Date.now
   },
   update:
   {
    type: Date,
    default:Date.now
   }
},
   {
    collection:"users"
   }
   );

   let options = ({missingPasswordError:'wrong.Missing Password'});
   user.plugin(passportLocalMongoose, options);
   module.exports.User = mongoose.model('user',user);