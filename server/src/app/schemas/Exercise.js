import mongoose, { Schema } from 'mongoose';

const ExerciseSchema = new Schema({
    course_id: String,
    exercise_presentation_url: String,
    exercise_points: Number,
});

const exercise = mongoose.model('Exercise', ExerciseSchema);

export default exercise;
