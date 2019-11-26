import mongoose, { Schema } from 'mongoose';

const StudentSchema = new Schema({
    email: String,
    name: String,
    age: Number,
    school_id: String,
});

const student = mongoose.model('Student', StudentSchema);

export default student;
