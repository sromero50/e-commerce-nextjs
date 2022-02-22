const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage")
const validation = require("../util/validators")
const bcrypt = require("bcrypt")


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, errorMessage.GENERAL.required],
        unique: true
    },
    password: {
        type: String,
        required: [true, errorMessage.GENERAL.required],
        validate: {
            validator: (value) => {
                return validation.isGoodPassword(value)
            }, message: errorMessage.USERS.invalidPassword
        }
    }
})


//hash password pre saving
userSchema.pre("save", function(next){
    this.password=bcrypt.hashSync(this.password, 10);
    next();
})

module.exports = mongoose.model("users", userSchema)