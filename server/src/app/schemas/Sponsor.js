import mongoose, { Schema } from 'mongoose';

<<<<<<< HEAD
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
=======
const SponsorSchema = new Schema({
    name: String,
});

const sponsor = mongoose.model('Sponsor', SponsorSchema);

export default sponsor;
>>>>>>> ad7027fe9854f4efc874f5cc2272827fcbbddc5a
