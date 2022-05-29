import {User} from '../model/user.model.mjs'
export const addUser = async(req,res) =>{
    const {name,email,number,course,country,dob} = req.body
    const user = new User({
        name,
        email,
        number: parseInt(number),
        course,
        country,
        dob
    })
    const userPresent = await User.findOneAndUpdate({email},{...req.body},{new:true})
    console.log(userPresent)
    if (userPresent===null){
        try {
            await user.save()
            res.json({status:"new"})
        }catch(e){
            console.log(e)
        }
    }else{
        res.json({status:"updated"})
    }

}