import mongoose, { Schema } from 'mongoose';

const SchoolSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
});

const School = mongoose.model('School', SchoolSchema);

export default School;
