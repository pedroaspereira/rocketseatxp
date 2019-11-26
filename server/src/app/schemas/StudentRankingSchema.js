import mongoose, { Schema } from 'mongoose';

const StudentRankingSchema = new Schema({
  student_id: { type: String, required: true },
  school_id: { type: String, required: true },
  total_points: { type: Number, required: true },
  position: { type: Number, required: true },
});

const StudentRanking = mongoose.model('StudentRanking', StudentRankingSchema);

export default StudentRanking;
