import mongoose, { Schema } from 'mongoose';

const SchoolRankingSchema = new Schema({
  school_id: String,
  total_points: Number,
  position: Number,
});

const schoolRanking = mongoose.model('SchoolRanking', SchoolRankingSchema);

export default schoolRanking;
