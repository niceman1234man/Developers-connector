import mongoose, { Schema } from 'mongoose'
const profileSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    handle:{
        type:String,
        required:true,
        max:40
    },
  company:{
      type:String,
    },
     website:{
        type:String,
      },
    location:{
        type:String,
      },
     status:{
        type:String,
        required:true,
      },

      skills:{
        type:[String],
        required:true,
      }
      ,bio:{
        type:String, 
      },
      githubusername:{
        type:String,
      },
      experiance:[
        {
            title:{
                type:String,
                required:true, 
            },
            company:{
                type:String,
                required:true, 
            },
            location:{
                type:String,
                
            },
            from:{
                type:Date,
                required:true, 
            },
            to:{
                type:Date,
           
            },
            current:{
                type:Boolean,
              default:false
            },
            title:{
                type:String,
                required:true, 
            },
            description:{
                type:String,
                required:true, 
            },

        }
      ],
      education:[
        {
            school:{
                type:String,
                required:true, 
            },
            degree:{
                type:String,
                required:true, 
            },
            fieldofStudy:{
                type:String,
                required:true, 
                
            },
            from:{
                type:Date,
                required:true, 
            },
            to:{
                type:Date,
           
            },
            current:{
                type:Boolean,
              default:false
            },
            title:{
                type:String,
                required:true, 
            },
            description:{
                type:String,
                required:true, 
            },

        }
      ],
      social:{
        youtube:{
            type:String,

        },
        twitter:{
            type:String,

        },
        facebook:{
            type:String,

        },
        instaram:{
            type:String,

        },
        linkedin:{
            type:String,

        },
      }
      
      
      
      

  
},{timestamps:true});
const Profile=mongoose.model("Profile",profileSchema);
export default Profile;