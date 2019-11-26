import mongoose, { Schema } from 'mongoose';

const StudentRankingSchema = new Schema({
    student_id: String,
    school_id: String,
    total_points: Number,
    position: Number,
});

const studentRanking = mongoose.model('StudentRanking', StudentRankingSchema);

export default studentRanking;



