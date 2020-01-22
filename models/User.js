const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

//creates a new collection called user on mongoDB
mongoose.model('users', userSchema);
