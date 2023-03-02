const {BadRequestError} = require("../errors/index")
const jwt = require("jsonwebtoken")



const login = async(req,res)=>{
    const {username,password} = req.body
    //mongo
    //joi
    //check in the controller

    if(!username || !password){
        throw new BadRequestError("Dont credentials provided")
    }

    const id = new Date().getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:"30d"})

    res.status(200).json({msg:"User was created",token})

}
const dashboard = async(req,res)=>{
    const {id,username} = req.user
    const luckyNumber = Math.floor(Math.random()*100)
    
        res.status(200).send({
            msg:`Hello ${username}`,
            secret:`Your lucky number${luckyNumber}`
        })
}

module.exports = {
    login,
    dashboard
}