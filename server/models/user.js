import mongoose from "mongoose";
import getJWTtoken from "../helpers/jwt.js"

const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, default: null },
        last_name: { type: String, default: null },
        email: { type: String, unique: true },
        password: { type: String },
        token: { type: String },
    },
    { collection: "user", timestamps: true }
);

UserSchema.methods.generateJWT = function () {
    return getJWTtoken(this);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        token: this.generateJWT(),
    };
};

const model = mongoose.model("User", UserSchema);

export default model;