import jwt from "jsonwebtoken";

const generateToken  = (id,time) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:time?time:'1d',
    })
}
export default generateToken;