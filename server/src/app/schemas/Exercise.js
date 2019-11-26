import mongoose, { Schema } from 'mongoose';

<<<<<<< HEAD
const ExerciseSchema = new Schema(
  {
    course_id: {
      type: String,
      required: true,
    },
    exercise_presentation_url: {
      type: String,
      required: true,
    },
    exercise_points: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
=======
const ExerciseSchema = new Schema({
    course_id: String,
    exercise_presentation_url: String,
    exercise_points: Number,
});
>>>>>>> ad7027fe9854f4efc874f5cc2272827fcbbddc5a

const exercise = mongoose.model('Exercise', ExerciseSchema);

export default exercise;
