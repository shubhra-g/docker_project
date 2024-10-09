import mongoose from "mongoose";
import bycrypt from "bcryptjs";


const usersSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "First Name is Required"] },
    lastName: { type: String, required: [true, "Last Name is Required"] },
    email: { type: String, unique: true, required: [true, "Email is Required"] },
    password: { type: String, required: [true, "Password is Required"] },
    highestEducation: { type: String, required: [true, "Please select your Highest Education Level"] },
    isVerified: { type: Boolean, default: false },
    uniqueString: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
})

// Encrypting Password on Registration
usersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
    next();
})

// Compare Password for Login Access
usersSchema.methods.matchPassword = async function (enteredPassword) {
    const result = await bycrypt.compare(enteredPassword, this.password);
    return result;
}

const Users = mongoose.model("Users", usersSchema);

export default Users;