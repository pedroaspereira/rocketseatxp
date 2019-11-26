import mongoose, { Schema } from 'mongoose';

<<<<<<< HEAD
const CourseSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    course_presentation_url: {
      type: String,
      required: true,
    },
    course_max_points: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
=======
const CourseSchema = new Schema({
    subject: String,
    course_presentation_url: String,
    course_max_points: Number 
});
>>>>>>> ad7027fe9854f4efc874f5cc2272827fcbbddc5a

const course = mongoose.model('Course', CourseSchema);

export default course;
