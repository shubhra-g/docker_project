import Jwt  from "jsonwebtoken";

const generateToken = async (id) => {
    const signed = await Jwt.sign({id}, "Ayomideh1$....", {expiresIn: "1hr"})
    return signed
}

export default generateToken