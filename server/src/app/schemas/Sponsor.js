import mongoose, { Schema } from 'mongoose';

const SponsorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const sponsor = mongoose.model('Sponsor', SponsorSchema);

export default sponsor;
