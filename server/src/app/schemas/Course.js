import mongoose, { Schema } from 'mongoose';

const CourseSchema = new Schema({
    subject: String,
    course_presentation_url: String,
    course_max_points: Number 
});

const course = mongoose.model('Course', CourseSchema);

export default course;
