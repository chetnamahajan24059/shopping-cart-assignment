import jwt from "jsonwebtoken";

const getJWTtoken = ({ _id, email }) => {
    return jwt.sign(
        { user_id: _id, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
} 

export default getJWTtoken;