import mongoose, { Schema } from 'mongoose';

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

const exercise = mongoose.model('Exercise', ExerciseSchema);

export default exercise;
