import User from "../model/userModel.js"
import uploadOnCloudinary from "../config/cloudinary.js"





export const getCurrentUser=async(req,res)=>{
    try{
        const user=await User.findById(req.userId).select("-password")
        if(!user){
            return res.status(404).json({message:"User not Found"})
        }
        await user.save()
        return res.status(200).json(user)


    }
    catch(error){
        return res.status(500).json({message:`GetCurrent User error $ {error}`})


    }
}

//update profile
export const updateProfile=async(req,res)=>{
    try{
        const userId=req.userId
        const {description,name}=req.body
        let photoUrl
        if(req.file){
            photoUrl=await uploadOnCloudinary(req.file.path);
        }
        const user=await User.findByIdAndUpdate(userId,{name,description,photoUrl})
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json(user);

    }
    catch(error){
        return res.status(500).json({message:`updateProfile error ${error}`})
        

    }

}