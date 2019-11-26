import mongoose, { Schema } from 'mongoose';

const SponsorSchema = new Schema({
    name: String,
});

const sponsor = mongoose.model('Sponsor', SponsorSchema);

export default sponsor;