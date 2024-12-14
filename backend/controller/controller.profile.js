
import Profile from "../models/model.profile";
import User from "../models/model.user";
export const getProfile=(req,res)=>{
try {
  Profile.findOne({handle:req.params.handle}).then((profile)=>{
    if(!profile){
      res.status(404).json("NO profile exist")

    }
    res.json(profile);
  }).catch((err)=>res.status(404).json(err));
} catch (error) {
  console.log(error)
  res.status(500).json("internal server error");
}

}


export const getProfilebyuserId=(req,res)=>{
  try {
    Profile.findOne({user:req.params.user_id}).then((profile)=>{
      if(!profile){
        res.status(404).json("NO profile exist")
  
      }
      res.json(profile);
    }).catch((err)=>res.status(404).json("no profile exist"));
  } catch (error) {
    console.log(error)
    res.status(500).json("internal server error");
  }
  
  }


  export const getAllProfile=(req,res)=>{
    try {
      Profile.findOne().then((profile)=>{
        if(!profile){
          res.status(404).json("NO profile exist")
    
        }
        res.json(profile);
      }).catch((err)=>res.status(404).json(err));
    } catch (error) {
      console.log(error)
      res.status(500).json("internal server error");
    }
    
    }

    export const AddExperiance=(req,res)=>{
      Profile.findOne({user:req.user.id}).then((profile)=>{
        const newExp={
          title:req.body.title,
          company:req.body.company,
          location:req.body.location,
          from:req.body.from,
          to:req.body.to,
          current:req.body.current,
          description:req.body.description,
        }
        profile.experiance.unshift(newExp);
        profile.save().then(profile=>res.json(profile))
      })

    }

    export const AddEducation=(req,res)=>{
      Profile.findOne({user:req.user.id}).then((profile)=>{
        const newExp={
          school:req.body.school,
          degree:req.body.degree,
          fieldofstudy:req.body.fieldofstudy,
          from:req.body.from,
          to:req.body.to,
          current:req.body.current,
          description:req.body.description,
        }
        profile.experiance.unshift(newExp);
        profile.save().then(profile=>res.json(profile))
      })

    }

export const postProfile=(req,res)=>{
  try {
    const profileFields={};
  profileFields.user=req.user.id;
  if(req.body.handle) profileFields.handle=req.body.handle;
  if(req.body.company) profileFields.handle=req.body.company;
  if(req.body.website) profileFields.handle=req.body.website;
  if(req.body.location) profileFields.handle=req.body.location;
  if(req.body.bio) profileFields.handle=req.body.bio;
  if(req.body.status) profileFields.handle=req.body.status;
  if(req.body.githubusername) profileFields.handle=req.body.githubusername;
  if(typeof req.body.skills !=='undefined'){
    profileFields.skills=req.body.skills.split(',');
  }
  profileFields.social={}
  if(req.body.youtube)  profileFields.social.youtube=req.body.youtube;
  if(req.body.twitter)  profileFields.social.twitter=req.body.twitter;
  if(req.body.instagram)  profileFields.social.instagram=req.body.instagram;
  if(req.body.linkedin)  profileFields.social.linkedin=req.body.linkedin;
  if(req.body.facebook)  profileFields.social.facebook=req.body.facebook;

  Profile.findOne({user:req.user.id}).then((profile)=>{
    if(profile){
      Profile.findOneAndUpdate({user:req.user.id},profileFields,{new:true}).then((profile)=>res.json(profile))
    }else{
      Profile.findOne({handle:profileFields.handle}).then((profile)=>{
        if(profile) return res.json("profile exists")
          const newProfile=new Profile(profileFields);
      newProfile.save();
      res.status(201).json(newProfile);
      })
      
    }
  })
  } catch (error) {
    console.log(error)
    res.status(500).json("internal server error");

  }
  
    
}


export const DeleteExperiance=(req,res)=>{
try {
  Profile.findOne({user:req.user.id}).then((profile)=>{
    const removeIndex=profile.experiance.map(item=>item.id).indexOf(req.params.exp_id);
    profile.experiance.splice(removeIndex,1);
    profile.save().then(profile=>res.json(profile));

  }).catch(err=>res.status(404).json(err))
} catch (error) {
  console.log(error)
  res.status(500).json("Internal server error");
}
}


export const DeleteEducation=(req,res)=>{
  try {
    Profile.findOne({user:req.user.id}).then((profile)=>{
      const removeIndex=profile.education.map(item=>item.id).indexOf(req.params.edu_id);
      profile.education.splice(removeIndex,1);
      profile.save().then(profile=>res.json(profile));
  
    }).catch(err=>res.status(404).json(err))
  } catch (error) {
    console.log(error)
    res.status(500).json("Internal server error");
  }
  }


  export const DeleteUserAndProfile=(req,res)=>{
    try {
    Profile.findOneAndDelete({user:req.user.id}).then(()=>{
      User.findById({_id:user.req.id}).then(()=>{
        res.json({sucess:true});
      })
    })
    } catch (error) {
      console.log(error)
      res.status(500).json("Internal server error");
    }
    }