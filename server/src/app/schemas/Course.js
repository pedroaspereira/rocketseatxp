import mongoose, { Schema } from 'mongoose';

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

const course = mongoose.model('Course', CourseSchema);

export default course;
